import React from "react";
import { cn } from "../../ui/utils";
import { IconArrowsOutSimple, IconDotsThreeVertical } from "./FormatIcons";

interface FormatPillProps {
  icon: React.ReactNode;
  title: string;
  formatType?: string;
  className?: string;
  style?: React.CSSProperties;
  onExpand?: () => void;
  onMore?: () => void;
}

export function FormatPill({
  icon,
  title,
  formatType,
  className,
  style,
  onExpand,
  onMore,
}: FormatPillProps) {
  return (
    <div
      className={cn(
        "flex items-center bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-sm select-none overflow-hidden",
        className
      )}
      style={{
        pointerEvents: 'all',
        ...style,
      }}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center pl-[var(--spacing-small)] py-[var(--spacing-small)]">
        <div className="size-4 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title Section */}
      <div className="flex items-center pl-[6px] pr-[var(--spacing-small)] py-[var(--spacing-xs)]">
        <span className="font-[family-name:var(--font-roobert)] font-medium text-[var(--text-base)] text-[var(--foreground)] leading-[24px] whitespace-nowrap">
          {title}
        </span>
      </div>

      {/* Actions Section */}
      <div className="flex items-center h-[32px]">
        {/* AI Sparkle Button with tooltip */}
        <div className="relative h-full flex items-center group/ai">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]" />
          <button
            onClick={(e) => { e.stopPropagation(); (window as any).__openAiPanel?.(formatType); }}
            className="nodrag flex items-center justify-center h-full px-[var(--spacing-small)] hover:bg-[var(--secondary)] transition-colors"
            aria-label="AI suggestions"
          >
            <svg className="size-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5c.2 1.8 1.2 3.4 2.8 4.2C12.4 6.5 14 7.5 14.5 8c-.5.5-2.1 1.5-3.7 2.3C9.2 11.1 8.2 12.7 8 14.5c-.2-1.8-1.2-3.4-2.8-4.2C3.6 9.5 2 8.5 1.5 8c.5-.5 2.1-1.5 3.7-2.3C6.8 4.9 7.8 3.3 8 1.5z" fill="#222428"/>
            </svg>
          </button>
          {/* Miro-style tooltip */}
          <div
            className="pointer-events-none opacity-0 group-hover/ai:opacity-100 transition-opacity duration-150"
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: 6,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "4px 8px",
              background: "#1A1B1E",
              boxShadow: "0px 2px 4px rgba(34, 36, 40, 0.08)",
              borderRadius: 8,
              whiteSpace: "nowrap",
              zIndex: 9999,
            }}
          >
            <span style={{ fontSize: 12, color: "#fff", fontWeight: 500, fontFamily: "var(--font-noto)", lineHeight: "22px" }}>AI suggestions</span>
          </div>
        </div>

        {/* Focus/Expand Button */}
        <div className="relative h-full flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]" />
          <button
            onClick={(e) => { e.stopPropagation(); onExpand?.(); }}
            className="nodrag flex items-center justify-center h-full px-[var(--spacing-small)] hover:bg-[var(--secondary)] transition-colors text-[var(--muted-foreground)]"
            aria-label="Focus"
          >
            <IconArrowsOutSimple className="size-4" />
          </button>
        </div>

        {/* Overflow/More Button */}
        <div className="relative h-full flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]" />
          <button
            onClick={(e) => { e.stopPropagation(); onMore?.(); }}
            className="nodrag flex items-center justify-center h-full px-[var(--spacing-small)] hover:bg-[var(--secondary)] transition-colors text-[var(--muted-foreground)]"
            aria-label="More"
          >
            <IconDotsThreeVertical className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
