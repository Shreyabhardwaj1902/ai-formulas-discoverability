import { NodeProps, NodeToolbar, Position } from "reactflow";
import { BaseWidget, BaseWidgetData } from "./BaseWidget";
import { styled } from "../../lib/stitches.config";
import { useState, useRef, useEffect } from "react";
import { WidgetToolbar, ToolbarSection } from "./WidgetToolbar";
import { ColorPickerDropdown } from "./ColorPickerDropdown";

const StickyContainer = styled("div", {
  width: "100%",
  height: "100%",
  borderRadius: "var(--radius-small)",
  padding: "var(--spacing-large)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  
  variants: {
    color: {
      yellow: {
        backgroundColor: "#FFF9C4",
      },
      blue: {
        backgroundColor: "#BBDEFB",
      },
      green: {
        backgroundColor: "#C8E6C9",
      },
      pink: {
        backgroundColor: "#F8BBD0",
      },
      purple: {
        backgroundColor: "#E1BEE7",
      },
    },
  },
  
  defaultVariants: {
    color: "yellow",
  },
});

const StickyTextArea = styled("textarea", {
  width: "100%",
  height: "100%",
  border: "none",
  backgroundColor: "transparent",
  resize: "none",
  fontFamily: "var(--font-noto)",
  fontSize: "14px",
  lineHeight: "1.5",
  color: "var(--foreground)",
  outline: "none",
  cursor: "default",
  
  "&::placeholder": {
    color: "var(--muted-foreground)",
  },
  
  "&:focus": {
    cursor: "text",
  },
  
  variants: {
    isEditing: {
      true: {
        cursor: "text",
      },
      false: {
        cursor: "default",
        pointerEvents: "none",
      },
    },
  },
});

export interface StickyNoteData extends BaseWidgetData {
  text?: string;
  color?: "yellow" | "blue" | "green" | "pink" | "purple";
  isEditing?: boolean;
}

const COLORS: Array<"yellow" | "blue" | "green" | "pink" | "purple"> = [
  "yellow",
  "blue",
  "green",
  "pink",
  "purple",
];

const COLOR_VALUES = {
  yellow: "#FFF9C4",
  blue: "#BBDEFB",
  green: "#C8E6C9",
  pink: "#F8BBD0",
  purple: "#E1BEE7",
};

export function StickyNoteWidget({ data, selected, id }: NodeProps<StickyNoteData>) {
  const [text, setText] = useState(data.text || "");
  const [color, setColor] = useState<"yellow" | "blue" | "green" | "pink" | "purple">(
    data.color || "yellow"
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isEditing = data.isEditing || false;

  // Focus textarea when entering edit mode
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      // Move cursor to end
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  const colorOptions = COLORS.map((c) => ({
    name: c.charAt(0).toUpperCase() + c.slice(1),
    value: COLOR_VALUES[c],
  }));

  return (
    <BaseWidget selected={selected} minWidth={150} minHeight={150} data={data}>
      <NodeToolbar
        isVisible={selected && !isEditing && !data.invisiblySelected}
        position={Position.Top}
        offset={10}
      >
        <WidgetToolbar>
          <ToolbarSection>
            <ColorPickerDropdown
              colors={colorOptions}
              value={COLOR_VALUES[color]}
              onChange={(newColor) => {
                const colorKey = Object.entries(COLOR_VALUES).find(
                  ([_, val]) => val === newColor
                )?.[0] as typeof color;
                if (colorKey) setColor(colorKey);
              }}
              variant="fill"
              label="Sticky note color"
            />
          </ToolbarSection>
        </WidgetToolbar>
      </NodeToolbar>
      
      <StickyContainer color={color}>
        <StickyTextArea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          isEditing={isEditing}
        />
      </StickyContainer>
    </BaseWidget>
  );
}