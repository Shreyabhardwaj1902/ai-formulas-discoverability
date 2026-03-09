import { NodeProps, NodeToolbar, Position } from "reactflow";
import { BaseWidget, BaseWidgetData } from "./BaseWidget";
import { styled } from "../../lib/stitches.config";
import { useState, useRef, useEffect } from "react";
import { Type } from "lucide-react";
import { WidgetToolbar, ToolbarSection, ToolbarDivider } from "./WidgetToolbar";
import { ColorPickerDropdown } from "./ColorPickerDropdown";

const FrameWrapper = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
});

const FrameTitleContainer = styled("div", {
  position: "absolute",
  top: "-24px",
  left: 0,
  display: "flex",
  alignItems: "center",
  gap: "var(--spacing-xsmall)",
  padding: 0,
  pointerEvents: "auto",
  zIndex: 10,
});

const FrameTitleText = styled("div", {
  fontFamily: "var(--font-noto)",
  fontSize: "14px",
  fontWeight: 400,
  color: "var(--foreground)",
  cursor: "default",
  padding: "2px 4px",
  borderRadius: "var(--radius-xsmall)",
  
  variants: {
    isEditing: {
      true: {
        display: "none",
      },
      false: {
        display: "block",
      },
    },
  },
});

const FrameTitleInput = styled("input", {
  fontFamily: "var(--font-noto)",
  fontSize: "14px",
  fontWeight: 400,
  color: "var(--foreground)",
  backgroundColor: "var(--surface)",
  border: "var(--border-width-default) solid var(--border)",
  borderRadius: "var(--radius-xsmall)",
  padding: "2px 4px",
  outline: "none",
  minWidth: "100px",
  
  "&:focus": {
    borderColor: "var(--primary)",
  },
  
  variants: {
    isEditing: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

const FrameContainer = styled("div", {
  width: "100%",
  height: "100%",
  border: "2px solid var(--border)",
  borderRadius: "var(--radius-small)",
  backgroundColor: "#ffffff",
  position: "relative",
  display: "flex",
  flexDirection: "column",
});

const FrameContent = styled("div", {
  flex: 1,
  padding: "var(--spacing-medium)",
  position: "relative",
  pointerEvents: "none", // Allow interaction with children inside
});

export interface FrameData extends BaseWidgetData {
  title?: string;
  borderColor?: string;
  fillColor?: string;
  childIds?: string[];
}

const BORDER_COLORS = [
  { name: "Gray", value: "#E5E7EB" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#10B981" },
  { name: "Red", value: "#EF4444" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Orange", value: "#F59E0B" },
];

const FILL_COLORS = [
  { name: "White", value: "#FFFFFF" },
  { name: "Light Gray", value: "#F3F4F6" },
  { name: "Light Blue", value: "#DBEAFE" },
  { name: "Light Green", value: "#D1FAE5" },
  { name: "Light Red", value: "#FEE2E2" },
  { name: "Light Purple", value: "#EDE9FE" },
];

export function FrameWidget({ data, selected }: NodeProps<FrameData>) {
  const [title, setTitle] = useState(data.title || "Frame");
  const [borderColor, setBorderColor] = useState(data.borderColor || "#E5E7EB");
  const [fillColor, setFillColor] = useState(data.fillColor || "#FFFFFF");
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isEditing = data.isEditing || false;

  // Focus input when entering title edit mode
  useEffect(() => {
    if (isTitleEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isTitleEditing]);

  const handleTitleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTitleEditing(true);
  };

  const handleTitleBlur = () => {
    setIsTitleEditing(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsTitleEditing(false);
    } else if (e.key === "Escape") {
      setTitle(data.title || "Frame");
      setIsTitleEditing(false);
    }
  };

  return (
    <BaseWidget selected={selected} minWidth={300} minHeight={200} data={data}>
      <NodeToolbar
        isVisible={selected && !isEditing}
        position={Position.Top}
        offset={40}
      >
        <WidgetToolbar>
          <ToolbarSection>
            <ColorPickerDropdown
              colors={FILL_COLORS}
              value={fillColor}
              onChange={setFillColor}
              variant="fill"
              label="Fill color"
              allowNoFill={true}
            />
          </ToolbarSection>
          <ToolbarDivider />
          <ToolbarSection>
            <ColorPickerDropdown
              colors={BORDER_COLORS}
              value={borderColor}
              onChange={setBorderColor}
              variant="stroke"
              label="Border color"
            />
          </ToolbarSection>
        </WidgetToolbar>
      </NodeToolbar>
      
      <FrameWrapper>
        <FrameTitleContainer>
          <FrameTitleText
            ref={titleRef}
            isEditing={isTitleEditing}
            onDoubleClick={handleTitleDoubleClick}
            style={{ fontWeight: 400 }}
          >
            {title}
          </FrameTitleText>
          <FrameTitleInput
            ref={inputRef}
            isEditing={isTitleEditing}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            style={{ fontWeight: 400 }}
          />
        </FrameTitleContainer>
        
        <FrameContainer style={{ borderColor, backgroundColor: fillColor }}>
          <FrameContent />
        </FrameContainer>
      </FrameWrapper>
    </BaseWidget>
  );
}