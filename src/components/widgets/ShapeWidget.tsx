import { NodeProps, NodeToolbar, Position } from "reactflow";
import { BaseWidget, BaseWidgetData } from "./BaseWidget";
import { styled } from "../../lib/stitches.config";
import { useState } from "react";
import { Circle, Square, Triangle } from "lucide-react";
import {
  WidgetToolbar,
  ToolbarSection,
  ToolbarDivider,
  ToolbarButtonSlot,
  ToolbarIconButton,
} from "./WidgetToolbar";
import { ColorPickerDropdown } from "./ColorPickerDropdown";

const ShapeContainer = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "var(--radius-small)",
  
  variants: {
    shape: {
      rectangle: {
        borderRadius: "var(--radius-small)",
      },
      circle: {
        borderRadius: "50%",
      },
      triangle: {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
    },
  },
  
  defaultVariants: {
    shape: "rectangle",
  },
});

export interface ShapeData extends BaseWidgetData {
  shape?: "rectangle" | "circle" | "triangle";
  fillColor?: string;
}

const SHAPE_COLORS = [
  { name: "Blue", value: "#4A90E2" },
  { name: "Green", value: "#10B981" },
  { name: "Red", value: "#EF4444" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Orange", value: "#F59E0B" },
  { name: "Pink", value: "#EC4899" },
];

export function ShapeWidget({ data, selected }: NodeProps<ShapeData>) {
  const [shape, setShape] = useState<"rectangle" | "circle" | "triangle">(
    data.shape || "rectangle"
  );
  const [fillColor, setFillColor] = useState(data.fillColor || "#4A90E2");

  return (
    <BaseWidget selected={selected} minWidth={100} minHeight={100} data={data}>
      <NodeToolbar
        isVisible={selected && !data.invisiblySelected}
        position={Position.Top}
        offset={10}
      >
        <WidgetToolbar>
          <ToolbarSection>
            <ToolbarButtonSlot>
              <ToolbarIconButton
                active={shape === "rectangle"}
                onClick={() => setShape("rectangle")}
                title="Rectangle"
              >
                <Square size={16} />
              </ToolbarIconButton>
            </ToolbarButtonSlot>
            <ToolbarButtonSlot>
              <ToolbarIconButton
                active={shape === "circle"}
                onClick={() => setShape("circle")}
                title="Circle"
              >
                <Circle size={16} />
              </ToolbarIconButton>
            </ToolbarButtonSlot>
            <ToolbarButtonSlot>
              <ToolbarIconButton
                active={shape === "triangle"}
                onClick={() => setShape("triangle")}
                title="Triangle"
              >
                <Triangle size={16} />
              </ToolbarIconButton>
            </ToolbarButtonSlot>
          </ToolbarSection>
          <ToolbarDivider />
          <ToolbarSection>
            <ColorPickerDropdown
              colors={SHAPE_COLORS}
              value={fillColor}
              onChange={setFillColor}
              variant="fill"
              label="Fill color"
            />
          </ToolbarSection>
        </WidgetToolbar>
      </NodeToolbar>
      
      <ShapeContainer 
        shape={shape} 
        style={{ 
          backgroundColor: fillColor,
          border: `var(--border-width-default) solid ${fillColor}`,
        }}
      />
    </BaseWidget>
  );
}