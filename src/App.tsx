import { styled } from "./lib/stitches.config";
import { useState, useCallback, useRef } from "react";
import { MiroHeader } from "./components/MiroHeader";
import { MiroToolbar } from "./components/MiroToolbar";
import { ZoomControls } from "./components/ZoomControls";
import { ReactFlowCanvas } from "./components/ReactFlowCanvas";
import AiPanelSolutionReview from "./imports/AiPanelSolutionReview";
import type { ReactFlowInstance, Viewport } from "reactflow";

const AppContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  fontFamily: "var(--font-noto)",
  backgroundColor: "var(--background)",
});

export default function App() {
  const [selectedTool, setSelectedTool] = useState("select");
  const [zoom, setZoom] = useState(100);
  const [showGrid, setShowGrid] = useState(true);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const flowRef = useRef<ReactFlowInstance | null>(null);

  // Called from TableFormat when Formula is clicked
  (window as any).__openAiPanel = () => setShowAiPanel(true);
  (window as any).__closeAiPanel = () => setShowAiPanel(false);

  const handleFlowMount = useCallback((instance: ReactFlowInstance) => {
    flowRef.current = instance;
    console.log("📊 React Flow instance ready");
    // Set initial zoom
    const currentZoom = instance.getZoom();
    setZoom(Math.round(currentZoom * 100));
  }, []);

  const handleViewportChange = useCallback((viewport: Viewport) => {
    setZoom(Math.round(viewport.zoom * 100));
  }, []);

  const handleToolChange = useCallback((tool: string) => {
    setSelectedTool(tool);
    console.log("🔧 Tool changed to:", tool);
  }, []);

  const handleZoomIn = useCallback(() => {
    if (flowRef.current) {
      flowRef.current.zoomIn({ duration: 200 });
      const currentZoom = flowRef.current.getZoom();
      setZoom(Math.round(currentZoom * 100));
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (flowRef.current) {
      flowRef.current.zoomOut({ duration: 200 });
      const currentZoom = flowRef.current.getZoom();
      setZoom(Math.round(currentZoom * 100));
    }
  }, []);

  const handleResetZoom = useCallback(() => {
    if (flowRef.current) {
      flowRef.current.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 200 });
      setZoom(100);
    }
  }, []);

  const handleToggleGrid = useCallback(() => {
    setShowGrid((prev) => !prev);
  }, []);

  const handleToolReset = useCallback(() => {
    setSelectedTool("select");
    console.log("🔧 Tool reset to select");
  }, []);

  return (
    <AppContainer>
      <MiroHeader />
      <ReactFlowCanvas 
        onFlowMount={handleFlowMount} 
        onViewportChange={handleViewportChange} 
        showGrid={showGrid} 
        activeTool={selectedTool === "select" ? null : selectedTool}
        onToolReset={handleToolReset}
      />
      <MiroToolbar onToolChange={handleToolChange} activeTool={selectedTool} />
      <ZoomControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        onToggleGrid={handleToggleGrid}
        showGrid={showGrid}
      />
      {/* AI Sidekick Panel */}
      {showAiPanel && (
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            padding: 0,
            isolation: "isolate",
            position: "absolute",
            top: "56px",
            right: "8px",
            width: "400px",
            maxWidth: "400px",
            height: "calc(100vh - 56px - 64px)",
            background: "#FFFFFF",
            border: "0.5px solid #E9EAEF",
            boxShadow: "0px 2px 4px rgba(34, 36, 40, 0.08)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 50,
          }}
        >
          <AiPanelSolutionReview />
        </div>
      )}
    </AppContainer>
  );
}