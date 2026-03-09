import { NodeProps, NodeToolbar, Position } from "reactflow";
import { BaseWidget, BaseWidgetData } from "./BaseWidget";
import { styled } from "../../lib/stitches.config";
import { useState, useRef, useEffect } from "react";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import {
  WidgetToolbar,
  ToolbarSection,
  ToolbarDivider,
  ToolbarButtonSlot,
  ToolbarIconButton,
} from "./WidgetToolbar";
import { ColorPickerDropdown } from "./ColorPickerDropdown";

const TextContainer = styled("div", {
  width: "100%",
  height: "100%",
  padding: "var(--spacing-small)",
  display: "flex",
  alignItems: "center",
});

const TextArea = styled("div", {
  width: "100%",
  minHeight: "100%",
  border: "none",
  backgroundColor: "transparent",
  fontFamily: "var(--font-noto)",
  fontSize: "16px",
  lineHeight: "1.5",
  color: "var(--foreground)",
  outline: "none",
  cursor: "default",
  
  "&[contenteditable]:empty:before": {
    content: "attr(data-placeholder)",
    color: "var(--muted-foreground)",
  },
  
  "&[contenteditable='true']": {
    cursor: "text",
  },
  
  "&[contenteditable='false']": {
    cursor: "default",
    userSelect: "none",
  },
});

export interface TextData extends BaseWidgetData {
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  align?: "left" | "center" | "right";
  isEditing?: boolean;
  color?: string;
}

const TEXT_COLORS = [
  { name: "Black", value: "#000000" },
  { name: "Gray", value: "#6B7280" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#10B981" },
  { name: "Red", value: "#EF4444" },
  { name: "Purple", value: "#8B5CF6" },
];

export function TextWidget({ data, selected }: NodeProps<TextData>) {
  const [bold, setBold] = useState(data.bold || false);
  const [italic, setItalic] = useState(data.italic || false);
  const [underline, setUnderline] = useState(data.underline || false);
  const [align, setAlign] = useState<"left" | "center" | "right">(data.align || "left");
  const [color, setColor] = useState(data.color || "#000000");
  const textRef = useRef<HTMLDivElement>(null);
  const isEditing = data.isEditing || false;

  // Focus text area when entering edit mode
  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();
      // Move cursor to end
      const range = document.createRange();
      const sel = window.getSelection();
      if (textRef.current.childNodes.length > 0) {
        range.selectNodeContents(textRef.current);
        range.collapse(false);
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }, [isEditing]);

  return (
    <BaseWidget selected={selected} minWidth={200} minHeight={60} data={data}>
      <NodeToolbar
        isVisible={selected && !isEditing && !data.invisiblySelected}
        position={Position.Top}
        offset={10}
      >
        <WidgetToolbar>
          <ToolbarSection>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <ToolbarIconButton
                active={bold}
                onClick={() => setBold(!bold)}
                title="Bold"
              >
                <Bold size={16} />
              </ToolbarIconButton>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <ToolbarIconButton
                active={italic}
                onClick={() => setItalic(!italic)}
                title="Italic"
              >
                <Italic size={16} />
              </ToolbarIconButton>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <ToolbarIconButton
                active={underline}
                onClick={() => setUnderline(!underline)}
                title="Underline"
              >
                <Underline size={16} />
              </ToolbarIconButton>
            </div>
          </ToolbarSection>
          <ToolbarDivider />
          <ToolbarSection>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <ToolbarIconButton
                active={align === "left"}
                onClick={() => setAlign("left")}
                title="Align left"
              >
                <AlignLeft size={16} />
              </ToolbarIconButton>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <ToolbarIconButton
                active={align === "center"}
                onClick={() => setAlign("center")}
                title="Align center"
              >
                <AlignCenter size={16} />
              </ToolbarIconButton>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <ToolbarIconButton
                active={align === "right"}
                onClick={() => setAlign("right")}
                title="Align right"
              >
                <AlignRight size={16} />
              </ToolbarIconButton>
            </div>
          </ToolbarSection>
          <ToolbarDivider />
          <ToolbarSection>
            <ColorPickerDropdown
              colors={TEXT_COLORS}
              value={color}
              onChange={setColor}
              variant="fill"
              label="Text color"
            />
          </ToolbarSection>
        </WidgetToolbar>
      </NodeToolbar>
      
      <TextContainer>
        <TextArea
          ref={textRef}
          contentEditable={isEditing}
          data-placeholder="Type something..."
          style={{
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            textDecoration: underline ? "underline" : "none",
            textAlign: align,
            color: color,
          }}
        />
      </TextContainer>
    </BaseWidget>
  );
}