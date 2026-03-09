import { styled } from "../lib/stitches.config";
import { useState, DragEvent } from "react";
import svgPaths from "../imports/svg-7pps5er6tr";
import aiSvgPaths from "../imports/svg-3t2tk1i2aj";
import {
  Toolbar,
  Flex,
  IconCursorFilled,
  IconLayout,
  IconStickyNote,
  IconTextT,
  IconShapesLines,
  IconPenTip,
  IconFrame,
  IconSmileySticker,
  IconChatLinesTwo,
  IconPlusSquare,
} from "@mirohq/design-system";

import { FormatsMenu } from "./FormatsMenu";

const ToolbarContainer = styled("div", {
  position: "absolute",
  left: "8px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  zIndex: 100,
});

const AIButton = styled("button", {
  position: "relative",
  width: "48px",
  height: "48px",
  borderRadius: "999px",
  background: "linear-gradient(43deg, #314CD9 13.33%, #6355E3 27.99%, #975EED 57.31%, #C966F6 86.64%)",
  border: "1px solid var(--border)",
  boxShadow: "0px 1px 8px 0px rgba(34, 36, 40, 0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",
  padding: 0,
  
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 2px 12px 0px rgba(108, 92, 231, 0.3)",
  },
  
  "&:active": {
    transform: "scale(0.95)",
  },
  
  variants: {
    active: {
      true: {
        boxShadow: "0px 2px 12px 0px rgba(108, 92, 231, 0.4)",
      },
    },
  },
});

export function MiroToolbar({
  onToolChange,
  activeTool = "select",
}: {
  onToolChange?: (tool: string) => void;
  activeTool?: string;
}) {
  const [aiEnabled, setAiEnabled] = useState(false);

  const handleToolClick = (tool: string) => {
    onToolChange?.(tool);
  };

  const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData(
      "application/reactflow",
      nodeType,
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <ToolbarContainer>
      {/* AI Button - Above toolbar */}
      <AIButton
        onClick={() => setAiEnabled(!aiEnabled)}
        active={aiEnabled}
        aria-label="AI Assistant"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path d={aiSvgPaths.pcb6a370} fill="white" />
          <path d={aiSvgPaths.p1a911b40} fill="white" />
          <path d={aiSvgPaths.p75c7d00} fill="white" />
        </svg>
      </AIButton>

      {/* Main Tools */}
      <Toolbar orientation="vertical">
        {/* Cursor/Select Tool */}
        <Toolbar.Icon
          active={activeTool === "select"}
          onClick={() => handleToolClick("select")}
          aria-label="Select tool"
        >
          <IconCursorFilled />
        </Toolbar.Icon>

        {/* Formats Menu */}
        <FormatsMenu onSelect={handleToolClick} />

        {/* Frame Tool */}
        <Toolbar.Icon
          active={activeTool === "frame"}
          onClick={() => handleToolClick("frame")}
          aria-label="Frame tool"
          draggable
          onDragStart={(e) => onDragStart(e as any, "frame")}
        >
          <IconFrame />
        </Toolbar.Icon>

        {/* Sticky Note */}
        <Toolbar.Icon
          active={activeTool === "stickyNote"}
          onClick={() => handleToolClick("stickyNote")}
          aria-label="Sticky note"
          draggable
          onDragStart={(e) =>
            onDragStart(e as any, "stickyNote")
          }
        >
          <IconStickyNote />
        </Toolbar.Icon>

        {/* Text */}
        <Toolbar.Icon
          active={activeTool === "text"}
          onClick={() => handleToolClick("text")}
          aria-label="Text tool"
          draggable
          onDragStart={(e) => onDragStart(e as any, "text")}
        >
          <IconTextT />
        </Toolbar.Icon>

        {/* Shapes */}
        <Toolbar.Icon
          active={activeTool === "shape"}
          onClick={() => handleToolClick("shape")}
          aria-label="Shapes"
          draggable
          onDragStart={(e) => onDragStart(e as any, "shape")}
        >
          <IconShapesLines />
        </Toolbar.Icon>

        {/* Draw/Pen */}
        <Toolbar.Icon
          active={activeTool === "draw"}
          onClick={() => handleToolClick("draw")}
          aria-label="Draw tool"
        >
          <IconPenTip />
        </Toolbar.Icon>

        {/* Comment */}
        <Toolbar.Icon
          active={activeTool === "comment"}
          onClick={() => handleToolClick("comment")}
          aria-label="Comment"
        >
          <IconChatLinesTwo />
        </Toolbar.Icon>

        {/* Emoji */}
        <Toolbar.Icon
          active={activeTool === "emoji"}
          onClick={() => handleToolClick("emoji")}
          aria-label="Emoji"
        >
          <IconSmileySticker />
        </Toolbar.Icon>

        {/* More */}
        <Toolbar.Icon
          active={activeTool === "more"}
          onClick={() => handleToolClick("more")}
          aria-label="More tools"
        >
          <IconPlusSquare />
        </Toolbar.Icon>
      </Toolbar>
    </ToolbarContainer>
  );
}