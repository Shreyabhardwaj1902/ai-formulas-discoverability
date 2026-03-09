import React from "react";
import { cn } from "../../ui/utils";
import { IconArrowsOutSimple, IconDotsThreeVertical } from "./FormatIcons";

interface FormatPillProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  onExpand?: () => void;
  onMore?: () => void;
}

export function FormatPill({
  icon,
  title,
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
