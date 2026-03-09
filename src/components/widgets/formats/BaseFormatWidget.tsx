import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../ui/utils";
import { FormatPill } from "./FormatPill";
import { NodeResizer, useViewport, NodeResizeControl, ControlPosition, useReactFlow } from "reactflow";

interface BaseFormatWidgetProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  id?: string;
}

export function BaseFormatWidget({
  icon,
  title,
  children,
  className,
  style,
  selected,
  id,
}: BaseFormatWidgetProps) {
  const { setNodes } = useReactFlow();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  // We need to capture the initial "base" dimensions of the content
  // so we can calculate the scale factor when the container is resized.
  const [baseSize, setBaseSize] = useState<{ width: number; height: number } | null>(null);
  const baseSizeRef = useRef<{ width: number; height: number } | null>(null);
  const { zoom } = useViewport();

  // Measure base size on mount and when content changes
  useEffect(() => {
    if (contentRef.current) {
      const { offsetWidth, offsetHeight } = contentRef.current;
      
      // Ensure we have valid dimensions
      if (offsetWidth > 0 && offsetHeight > 0) {
        // Update baseSize if it hasn't been set or if dimensions have changed
        if (!baseSize || baseSize.width !== offsetWidth || baseSize.height !== offsetHeight) {
          setBaseSize({ width: offsetWidth, height: offsetHeight });
        }
      }
    }
  });

  // Update baseSizeRef and handle initial scale
  useEffect(() => {
    if (!baseSizeRef.current && baseSize && containerRef.current) {
      const w = containerRef.current.offsetWidth;
      if (w > 0) {
        setScale(w / baseSize.width);
      }
    }
    baseSizeRef.current = baseSize;
  }, [baseSize]);

  // Observe resize of the container (driven by NodeResizer)
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width < 10) return;

        if (!baseSizeRef.current) return;
        const newScale = width / baseSizeRef.current.width;
        setScale(newScale);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Sync Node Size (Height & Width) to Content
  useEffect(() => {
    if (id && baseSize && containerRef.current) {
      const targetHeight = baseSize.height * scale;
      const targetWidth = baseSize.width * scale;
      const currentHeight = containerRef.current.offsetHeight;
      const currentWidth = containerRef.current.offsetWidth;

      let updateStyle: any = {};
      let needsUpdate = false;

      if (Math.abs(currentHeight - targetHeight) > 2) {
        updateStyle.height = targetHeight;
        needsUpdate = true;
      }

      // Also update width if content grew (scale constant)
      if (Math.abs(currentWidth - targetWidth) > 2) {
        updateStyle.width = targetWidth;
        needsUpdate = true;
      }

      if (needsUpdate) {
        const timer = setTimeout(() => {
          setNodes((nodes) =>
            nodes.map((n) => {
              if (n.id === id) {
                return {
                  ...n,
                  style: {
                    ...n.style,
                    ...updateStyle,
                  },
                };
              }
              return n;
            })
          );
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [baseSize, scale, id, setNodes]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full", className)} 
      // We enforce w-full h-full to fill the Node's bounding box set by React Flow
      style={{ ...style, width: '100%', height: '100%' }}
    >
      {/* Format Pill - Manually positioned and counter-scaled to mimic toolbar behavior but attached to node for dragging */}
      <div 
        className="absolute left-0 z-50 origin-bottom-left"
        style={{ 
          bottom: '100%',
          marginBottom: `${12 / zoom}px`, // Constant screen-space margin
          transform: `scale(${1 / zoom})`,
          width: 'max-content'
        }}
      >
        <FormatPill icon={icon} title={title} />
      </div>
      
      {/* Content Container with Scaling */}
      {/* 
          We apply the transform to this wrapper. 
          The content inside (children) renders at its natural base size.
          The wrapper scales it to fit the parent container.
      */}
      <div 
        style={{
          transform: baseSize ? `scale(${scale})` : 'none',
          transformOrigin: 'top left',
          width: baseSize ? baseSize.width : 'auto', // Lock width to base so layout doesn't reflow
          height: baseSize ? baseSize.height : 'auto', // Lock height to base
          // If we don't have baseSize yet, let it render naturally so we can measure it.
          visibility: baseSize ? 'visible' : 'hidden', // Hide until measured to prevent flicker? Or just let it render.
          // Better to let it render so we can measure.
        }}
      >
         {/* 
            We need a stable reference for the content's natural size.
            If we apply transform to the parent of this div, we can measure this div.
         */}
         <div ref={contentRef} className="inline-block origin-top-left">
            {children}
         </div>
      </div>

      {selected && (
        <>
          {(["top-left", "top-right", "bottom-left", "bottom-right"] as ControlPosition[]).map((pos) => (
            <NodeResizeControl
              key={pos}
              variant="resize"
              position={pos}
              minWidth={100}
              minHeight={100}
              keepAspectRatio={true}
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
    </div>
  );
}
