import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ReactFlowInstance,
  ViewportHelperFunctionOptions,
  Viewport,
  Node,
  NodeTypes,
  useViewport,
} from "reactflow";
import "reactflow/dist/style.css";
import { styled } from "../lib/stitches.config";
import { useCallback, useEffect, useMemo, useRef, DragEvent, useState } from "react";
import { 
  StickyNoteWidget, 
  ShapeWidget, 
  TextWidget, 
  FrameWidget,
  DocumentNode,
  TableNode,
  DiagramNode,
  PrototypeNode,
  SlidesNode
} from "./widgets";

const CanvasWrapper = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  fontFamily: "var(--font-noto)",
  backgroundColor: "var(--background)",
  
  // Use default cursor instead of hand
  "& .react-flow__pane": {
    cursor: "var(--canvas-cursor, default)",
  },
  
  // Hide React Flow's default controls since we're using custom Miro ones
  "& .react-flow__controls": {
    display: "none !important",
  },
  "& .react-flow__minimap": {
    display: "none !important",
  },
  "& .react-flow__attribution": {
    display: "none !important",
  },
  
  // Style the canvas background
  "& .react-flow__background": {
    backgroundColor: "var(--background)",
  },
  
  // Style nodes to use design system variables
  "& .react-flow__node": {
    fontFamily: "var(--font-noto)",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "var(--radius-medium)",
    padding: "0",
    color: "var(--foreground)",
  },
  
  // Remove default styling for custom format widgets so they control their own look
  "& .react-flow__node-document, & .react-flow__node-table, & .react-flow__node-diagram, & .react-flow__node-prototype, & .react-flow__node-slides": {
    backgroundColor: "transparent !important",
    border: "none !important",
    padding: "0 !important",
    boxShadow: "none !important",
    width: "auto", 
    height: "auto",
    overflow: "visible !important",
  },
  
  // Frame widgets should have lower z-index to appear behind their children
  "& .react-flow__node[data-type='frame']": {
    zIndex: "1 !important",
  },
  
  // Non-frame widgets should have higher z-index to appear above frames
  "& .react-flow__node:not([data-type='frame'])": {
    zIndex: "10 !important",
  },
  
  "& .react-flow__node.selected": {
    outline: "none",
    border: "none",
    boxShadow: "none",
  },

  // For document/table, we might want a different selection style or let the component handle it.
  // But React Flow applies .selected to the wrapper.
  "& .react-flow__node-document.selected, & .react-flow__node-table.selected, & .react-flow__node-diagram.selected, & .react-flow__node-prototype.selected, & .react-flow__node-slides.selected": {
     // We can hide the default selection border if the component handles it, 
     // or style it to match the component shape.
     // For now, let's remove the wrapper selection style and rely on internal if needed, 
     // OR keep it but transparent if the component has its own "Pill" selection indicator.
     borderColor: "transparent",
     boxShadow: "none",
  },
  
  "& .react-flow__edge-path": {
    stroke: "var(--border)",
    strokeWidth: "calc(2px / var(--zoom))",
  },
  
  "& .react-flow__edge.selected .react-flow__edge-path": {
    stroke: "var(--primary)",
  },
});

interface ReactFlowCanvasProps {
  onFlowMount?: (instance: ReactFlowInstance) => void;
  onViewportChange?: (viewport: Viewport) => void;
  showGrid?: boolean;
  activeTool?: string | null;
  onToolReset?: () => void;
}

// Helper to generate cursor styles
const getCursorForTool = (tool: string | null) => {
  if (!tool || tool === 'select') return 'default';
  
  let svg = '';
  // Simple SVG icons for tools
  switch(tool) {
    case 'stickyNote':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" fill="#FFF9B1" stroke="#000" stroke-width="1"/></svg>`;
      break;
    case 'text':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="4" y="18" font-family="serif" font-size="20" fill="#000">T</text></svg>`;
      break;
    case 'shape':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" stroke="#000" stroke-width="1" fill="none"/></svg>`;
      break;
    case 'frame':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" stroke="#000" stroke-width="1" stroke-dasharray="4 2" fill="none"/></svg>`;
      break;
    case 'document':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#000" stroke-width="1" fill="#fff"/></svg>`;
      break;
    case 'table':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21V21H3V3Z" stroke="#000" stroke-width="1" fill="#fff"/><path d="M3 9H21" stroke="#000"/><path d="M3 15H21" stroke="#000"/><path d="M9 3V21" stroke="#000"/><path d="M15 3V21" stroke="#000"/></svg>`;
      break;
    case 'diagram':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" stroke="#000" stroke-width="1" fill="none"/><circle cx="12" cy="12" r="4" stroke="#000" stroke-width="1" fill="none"/></svg>`;
      break;
    case 'prototype':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="16" rx="2" stroke="#000" stroke-width="1" fill="none"/><path d="M12 18v1" stroke="#000"/></svg>`;
      break;
    case 'slides':
      svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="1" stroke="#000" stroke-width="1" fill="none"/><path d="M12 12v3" stroke="#000"/><path d="M9 12h6" stroke="#000"/></svg>`;
      break;
    default:
      return 'crosshair';
  }
  
  const encoded = encodeURIComponent(svg);
  return `url('data:image/svg+xml,${encoded}') 12 12, auto`;
};

const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];

const DEFAULT_WIDGET_SIZES: Record<string, { width: number; height: number }> = {
  stickyNote: { width: 200, height: 200 },
  shape: { width: 150, height: 150 },
  text: { width: 300, height: 100 },
  frame: { width: 400, height: 300 },
  document: { width: 500, height: 600 }, 
  table: { width: 800, height: 400 },
  diagram: { width: 802, height: 451 },
  prototype: { width: 802, height: 451 },
  slides: { width: 802, height: 451 },
};

function ReactFlowCanvasInner({ onFlowMount, onViewportChange, showGrid = true, activeTool, onToolReset }: ReactFlowCanvasProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const previousNodesRef = useRef<Node[]>([]);

  const { zoom } = useViewport();

  // Define custom node types
  const nodeTypes: NodeTypes = useMemo(
    () => ({
      stickyNote: StickyNoteWidget,
      shape: ShapeWidget,
      text: TextWidget,
      frame: FrameWidget,
      document: DocumentNode,
      table: TableNode,
      diagram: DiagramNode,
      prototype: PrototypeNode,
      slides: SlidesNode,
    }),
    []
  );

  // Calculate cursor style
  const cursorStyle = useMemo(() => {
    return getCursorForTool(activeTool || null);
  }, [activeTool]);

  // Helper function to check if a node is inside a frame
  const isNodeInsideFrame = useCallback((node: Node, frame: Node) => {
    if (!node.position || !frame.position || !node.width || !node.height || !frame.width || !frame.height) {
      return false;
    }

    const nodeLeft = node.position.x;
    const nodeRight = node.position.x + (node.width || 0);
    const nodeTop = node.position.y;
    const nodeBottom = node.position.y + (node.height || 0);

    const frameLeft = frame.position.x;
    const frameRight = frame.position.x + (frame.width || 0);
    const frameTop = frame.position.y;
    const frameBottom = frame.position.y + (frame.height || 0);

    // Check if the center of the node is inside the frame
    const nodeCenterX = nodeLeft + (node.width || 0) / 2;
    const nodeCenterY = nodeTop + (node.height || 0) / 2;

    return (
      nodeCenterX >= frameLeft &&
      nodeCenterX <= frameRight &&
      nodeCenterY >= frameTop &&
      nodeCenterY <= frameBottom
    );
  }, []);

  // Update parent-child relationships when nodes move
  const updateParentChildRelationships = useCallback((updatedNodes: Node[]) => {
    const frames = updatedNodes.filter((n) => n.type === "frame");
    const nonFrames = updatedNodes.filter((n) => n.type !== "frame");

    const nodesWithUpdatedRelationships = updatedNodes.map((node) => {
      if (node.type === "frame") {
        // Update frame's childIds
        const childIds = nonFrames
          .filter((n) => isNodeInsideFrame(n, node))
          .map((n) => n.id);

        return {
          ...node,
          data: {
            ...node.data,
            childIds,
          },
        };
      } else {
        // Update widget's parentId
        const parentFrame = frames.find((frame) => isNodeInsideFrame(node, frame));

        return {
          ...node,
          data: {
            ...node.data,
            parentId: parentFrame?.id || null,
          },
        };
      }
    });

    // Reorder nodes to ensure children appear after their parent frames
    // This ensures proper z-index stacking
    const frameNodes = nodesWithUpdatedRelationships.filter((n) => n.type === "frame");
    const childNodes: Node[] = [];
    const orphanNodes: Node[] = [];

    nodesWithUpdatedRelationships.forEach((node) => {
      if (node.type !== "frame") {
        if (node.data.parentId) {
          childNodes.push(node);
        } else {
          orphanNodes.push(node);
        }
      }
    });

    // Build final array: frames first, then their children, then orphan widgets
    const reorderedNodes: Node[] = [];
    
    frameNodes.forEach((frame) => {
      reorderedNodes.push(frame);
      // Add children of this frame immediately after it
      const children = childNodes.filter((child) => child.data.parentId === frame.id);
      reorderedNodes.push(...children);
    });
    
    // Add remaining orphan nodes at the end
    reorderedNodes.push(...orphanNodes);

    return reorderedNodes;
  }, [isNodeInsideFrame]);

  // Custom nodes change handler
  const handleNodesChange = useCallback(
    (changes: any) => {
      onNodesChange(changes);

      // After nodes change, update parent-child relationships
      setNodes((currentNodes) => {
        const updatedNodes = updateParentChildRelationships(currentNodes);
        
        // Check if a frame was moved and move its children
        const movedFrames = changes
          .filter((change: any) => change.type === "position" && change.dragging)
          .map((change: any) => change.id);

        if (movedFrames.length > 0) {
          const frameMovements: Record<string, { deltaX: number; deltaY: number }> = {};

          movedFrames.forEach((frameId: string) => {
            const currentFrame = updatedNodes.find((n) => n.id === frameId);
            const previousFrame = previousNodesRef.current.find((n) => n.id === frameId);

            if (currentFrame && previousFrame && currentFrame.position && previousFrame.position) {
              frameMovements[frameId] = {
                deltaX: currentFrame.position.x - previousFrame.position.x,
                deltaY: currentFrame.position.y - previousFrame.position.y,
              };
            }
          });

          // Move children with their parent frames
          const result = updatedNodes.map((node) => {
            if (node.data.parentId && frameMovements[node.data.parentId]) {
              const { deltaX, deltaY } = frameMovements[node.data.parentId];
              return {
                ...node,
                position: {
                  x: node.position.x + deltaX,
                  y: node.position.y + deltaY,
                },
              };
            }
            return node;
          });

          previousNodesRef.current = result;
          return result;
        }

        previousNodesRef.current = updatedNodes;
        return updatedNodes;
      });
    },
    [onNodesChange, updateParentChildRelationships]
  );

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onInit = useCallback(
    (instance: ReactFlowInstance) => {
      console.log("✅ React Flow mounted successfully");
      reactFlowInstance.current = instance;
      if (onFlowMount) {
        onFlowMount(instance);
      }
    },
    [onFlowMount]
  );

  const onViewportChangeHandler = useCallback(
    (viewport: Viewport) => {
      if (onViewportChange) {
        onViewportChange(viewport);
      }
    },
    [onViewportChange]
  );

  // Handle drag over event
  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // Handle drop event to create new widgets
  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // Check if the dropped element is a valid widget type
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.current?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      if (!position) return;

      const size = DEFAULT_WIDGET_SIZES[type] || { width: 200, height: 200 };

      const newNode: Node = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { isEditing: false },
        style: {
          width: size.width,
          height: size.height,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  // Handle canvas click to add widgets (fallback method)
  const onPaneClick = useCallback(
    (event: React.MouseEvent) => {
      // Exit edit mode when clicking on pane
      setEditingNodeId(null);
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          data: { ...node.data, isEditing: false },
        }))
      );

      if (!activeTool || activeTool === "select") return;

      const canvas = event.currentTarget.getBoundingClientRect();
      // Adjust position to center the widget on click
      // Using screenToFlowPosition is better if available, but we don't have event easily mapped there in onPaneClick without ref conversion
      // But we can use project() if we had it.
      // Simpler: just use client offsets relative to canvas
      
      // Better way to get position compatible with zoom/pan
      let position = { x: 0, y: 0 };
      if (reactFlowInstance.current) {
        position = reactFlowInstance.current.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY
        });
      } else {
         position = {
            x: event.clientX - canvas.left,
            y: event.clientY - canvas.top,
         };
      }
      
      // Adjust for centering based on type
      let offset = { x: 0, y: 0 };
      const size = DEFAULT_WIDGET_SIZES[activeTool] || { width: 200, height: 200 };
      
      offset = { x: size.width / 2, y: size.height / 2 };
      
      position.x -= offset.x;
      position.y -= offset.y;

      const newNode: Node = {
        id: `${activeTool}-${Date.now()}`,
        type: activeTool,
        position,
        data: { isEditing: false },
        style: {
          width: size.width,
          height: size.height,
        },
      };

      setNodes((nds) => [...nds, newNode]);

      if (onToolReset) {
        onToolReset();
      }
    },
    [activeTool, setNodes, onToolReset]
  );

  // Handle node click
  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      // Exit edit mode on other nodes
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: { ...n.data, isEditing: n.id === node.id ? n.data.isEditing : false },
        }))
      );

      // If clicking on a frame, invisibly select its children
      if (node.type === "frame" && node.selected) {
        const childIds = node.data.childIds || [];
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            data: {
              ...n.data,
              invisiblySelected: childIds.includes(n.id),
            },
          }))
        );
      }
    },
    [setNodes]
  );

  // Handle node double click to enter edit mode
  const onNodeDoubleClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      setEditingNodeId(node.id);
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: { ...n.data, isEditing: n.id === node.id },
        }))
      );
    },
    [setNodes]
  );

  // Handle selection change
  const onSelectionChange = useCallback(
    ({ nodes: selectedNodes }: { nodes: Node[] }) => {
      // Exit edit mode if no nodes are selected or different node is selected
      if (selectedNodes.length === 0 || (editingNodeId && !selectedNodes.find(n => n.id === editingNodeId))) {
        setEditingNodeId(null);
        setNodes((nds) =>
          nds.map((node) => ({
            ...node,
            data: { ...node.data, isEditing: false, invisiblySelected: false },
          }))
        );
      } else {
        // Handle frame selection - invisibly select children
        const selectedFrames = selectedNodes.filter((n) => n.type === "frame");
        const childIdsToSelect = new Set<string>();

        selectedFrames.forEach((frame) => {
          const childIds = frame.data.childIds || [];
          childIds.forEach((id: string) => childIdsToSelect.add(id));
        });

        setNodes((nds) =>
          nds.map((node) => ({
            ...node,
            data: {
              ...node.data,
              invisiblySelected: childIdsToSelect.has(node.id),
            },
          }))
        );
      }
    },
    [setNodes, editingNodeId]
  );

  // Keyboard shortcuts for copy, paste, delete, and edit mode
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Delete selected nodes
      if (event.key === "Delete" || event.key === "Backspace") {
        // Don't delete if we're in edit mode
        if (editingNodeId) return;
        
        setNodes((nds) => nds.filter((node) => !node.selected));
        setEdges((eds) => eds.filter((edge) => !edge.selected));
      }

      // Copy selected nodes (Cmd/Ctrl + C)
      if ((event.metaKey || event.ctrlKey) && event.key === "c") {
        if (editingNodeId) return; // Don't copy if in edit mode
        
        const selectedNodes = nodes.filter((node) => node.selected);
        if (selectedNodes.length > 0) {
          localStorage.setItem("copiedNodes", JSON.stringify(selectedNodes));
        }
      }

      // Paste nodes (Cmd/Ctrl + V)
      if ((event.metaKey || event.ctrlKey) && event.key === "v") {
        if (editingNodeId) return; // Don't paste if in edit mode
        
        const copiedNodesStr = localStorage.getItem("copiedNodes");
        if (copiedNodesStr) {
          const copiedNodes: Node[] = JSON.parse(copiedNodesStr);
          const newNodes = copiedNodes.map((node) => ({
            ...node,
            id: `${node.type}-${Date.now()}-${Math.random()}`,
            position: {
              x: node.position.x + 20,
              y: node.position.y + 20,
            },
            selected: false,
            data: { ...node.data, isEditing: false },
          }));
          setNodes((nds) => [...nds, ...newNodes]);
        }
      }

      // Duplicate selected nodes (Cmd/Ctrl + D)
      if ((event.metaKey || event.ctrlKey) && event.key === "d") {
        if (editingNodeId) return; // Don't duplicate if in edit mode
        
        event.preventDefault();
        const selectedNodes = nodes.filter((node) => node.selected);
        if (selectedNodes.length > 0) {
          const duplicatedNodes = selectedNodes.map((node) => ({
            ...node,
            id: `${node.type}-${Date.now()}-${Math.random()}`,
            position: {
              x: node.position.x + 20,
              y: node.position.y + 20,
            },
            selected: false,
            data: { ...node.data, isEditing: false },
          }));
          setNodes((nds) => [...nds, ...duplicatedNodes]);
        }
      }

      // Enter edit mode on selected node when typing (printable characters)
      if (!editingNodeId && !event.metaKey && !event.ctrlKey && !event.altKey) {
        // Check if it's a printable character
        if (event.key.length === 1 || event.key === "Enter") {
          const selectedNode = nodes.find((node) => node.selected);
          if (selectedNode && (selectedNode.type === "text" || selectedNode.type === "stickyNote" || selectedNode.type === "frame")) {
            setEditingNodeId(selectedNode.id);
            setNodes((nds) =>
              nds.map((n) => ({
                ...n,
                data: { ...n.data, isEditing: n.id === selectedNode.id },
              }))
            );
          }
        }
      }

      // Escape to exit edit mode
      if (event.key === "Escape" && editingNodeId) {
        setEditingNodeId(null);
        setNodes((nds) =>
          nds.map((node) => ({
            ...node,
            data: { ...node.data, isEditing: false },
          }))
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nodes, setNodes, setEdges, editingNodeId]);

  return (
    <CanvasWrapper 
      ref={reactFlowWrapper} 
      style={{ 
        "--canvas-cursor": cursorStyle,
        "--zoom": zoom 
      } as React.CSSProperties}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        onMove={(event, viewport) => onViewportChangeHandler(viewport)}
        onPaneClick={onPaneClick}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onSelectionChange={onSelectionChange}
        onDrop={onDrop}
        onDragOver={onDragOver}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={0.05}
        maxZoom={10}
        panOnScroll={true}
        panOnScrollMode="free"
        zoomOnScroll={false}
        zoomOnPinch={true}
        panOnDrag={[1, 2]} // Pan with middle or right mouse button
        multiSelectionKeyCode="Shift"
        deleteKeyCode="Delete"
        selectionOnDrag={true}
        selectionMode="partial"
        nodesDraggable={true}
      >
        <Background 
          color="#ddd" 
          gap={40} 
          size={2}
          style={{ display: showGrid ? "block" : "none" }} 
        />
      </ReactFlow>
    </CanvasWrapper>
  );
}

export function ReactFlowCanvas(props: ReactFlowCanvasProps) {
  return (
    <ReactFlowProvider>
      <ReactFlowCanvasInner {...props} />
    </ReactFlowProvider>
  );
}
