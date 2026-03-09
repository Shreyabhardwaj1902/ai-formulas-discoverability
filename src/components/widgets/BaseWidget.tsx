import { NodeProps, NodeResizer, useViewport, NodeResizeControl, ControlPosition } from "reactflow";
import { styled } from "../../lib/stitches.config";
import { ReactNode } from "react";

const WidgetContainer = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  
  // Make sure resize handles appear above content
  "& .react-flow__resize-control": {
    zIndex: 1000,
  },
  
  "& .react-flow__resize-control-line": {
    zIndex: 1000,
  },
  
  "& .react-flow__resize-control-handle": {
    zIndex: 1000,
  },
  
  // Remove React Flow selection styling
  "&.selected": {
    outline: "none !important",
    border: "none !important",
    boxShadow: "none !important",
  },
});

export interface BaseWidgetData {
  label?: string;
  color?: string;
  isEditing?: boolean;
  parentId?: string | null;
  childIds?: string[];
  invisiblySelected?: boolean;
  [key: string]: any;
}

export interface BaseWidgetProps extends NodeProps {
  children: ReactNode;
  minWidth?: number;
  minHeight?: number;
  backgroundColor?: string;
  borderColor?: string;
  showResize?: boolean;
  data?: BaseWidgetData;
  className?: string;
  style?: React.CSSProperties;
}

export function BaseWidget({
  children,
  selected,
  minWidth = 100,
  minHeight = 100,
  backgroundColor = "var(--surface)",
  borderColor = "var(--border)",
  showResize = true,
  data,
  className,
  style,
}: BaseWidgetProps) {
  const { zoom } = useViewport();
  const isInvisiblySelected = data?.invisiblySelected || false;
  const shouldShowResize = selected && !isInvisiblySelected && showResize;
  
  return (
    <WidgetContainer
      className={className}
      style={{
        backgroundColor,
        border: `${1 / zoom}px solid ${borderColor}`,
        ...style,
      }}
    >
      {children}
      {shouldShowResize && (
        <>
          {(["top-left", "top-right", "bottom-left", "bottom-right"] as ControlPosition[]).map((pos) => (
            <NodeResizeControl
              key={pos}
              variant="resize"
              position={pos}
              minWidth={minWidth}
              minHeight={minHeight}
              style={{
                position: "absolute",
                top: pos.includes("top") ? 0 : undefined,
                bottom: pos.includes("bottom") ? 0 : undefined,
                left: pos.includes("left") ? 0 : undefined,
                right: pos.includes("right") ? 0 : undefined,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                border: "2px solid var(--background)",
                transform: `translate(${
                  pos.includes("left") ? "-50%" : "50%"
                }, ${pos.includes("top") ? "-50%" : "50%"}) scale(${1 / zoom})`,
                zIndex: 1000,
              }}
            />
          ))}
          {/* Custom Selection Ring */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              border: `${1 / zoom}px solid var(--primary)`,
              zIndex: 999,
            }}
          />
        </>
      )}
    </WidgetContainer>
  );
}