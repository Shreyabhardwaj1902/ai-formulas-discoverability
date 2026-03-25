import React, { useState } from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { SlidesMenuIcon } from "./FormatIcons";
import { NudgeCard, MiniSlidesPreview } from "./NudgeCard";

export function SlidesFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  const [showNudge, setShowNudge] = useState(!!data?.showNudge);

  return (
    <>
    <BaseFormatWidget
       icon={<SlidesMenuIcon />}
       title="Slides"
       formatType="slides"
       selected={selected}
       id={id}
       className="w-[802px] h-[451px]"
    >
       <div className="w-[802px] h-[451px] bg-[var(--background)] rounded-[var(--radius-lg)] border border-[var(--border)] flex items-center justify-center relative overflow-hidden px-6 gap-4">
          {[
            { num: 1, title: "Brainstorm\nSession", gradient: "linear-gradient(135deg, #8B7FE8 0%, #A78BFA 40%, #C4B5FD 70%, #9F8FEF 100%)" },
            { num: 2, title: "Brainstorm\nSession", gradient: "linear-gradient(135deg, #9B8FEF 0%, #B49AFA 40%, #A78BFA 70%, #8B7FE8 100%)" },
            { num: 3, title: "Brainstorm\nSession", gradient: "linear-gradient(135deg, #A78BFA 0%, #8B7FE8 40%, #B49AFA 70%, #9F8FEF 100%)" },
          ].map((slide) => (
            <div key={slide.num} className="flex flex-col gap-1 shrink-0">
              <span style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "var(--font-noto)" }}>{slide.num}</span>
              <div
                style={{
                  width: 240, height: 160, borderRadius: 12,
                  background: slide.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.12)", filter: "blur(30px)", top: -20, left: -10 }} />
                <div style={{ position: "absolute", width: 80, height: 80, borderRadius: "50%", background: "rgba(139,127,232,0.3)", filter: "blur(25px)", bottom: -10, right: 20 }} />
                <span style={{ color: "#fff", fontSize: 24, fontWeight: 700, textAlign: "center", lineHeight: 1.2, fontFamily: "var(--font-noto)", whiteSpace: "pre-line", zIndex: 1 }}>
                  {slide.title}
                </span>
              </div>
            </div>
          ))}
       </div>
    </BaseFormatWidget>
      <NudgeCard
        show={showNudge}
        onDismiss={() => setShowNudge(false)}
        formatType="slides"
        content={{
          preview: <MiniSlidesPreview />,
          title: "Draft speaker notes?",
          description: "Your slides have content but no speaker notes — I can draft talking points for each slide.",
          ctaLabel: "Draft notes",
        }}
      />
    </>
  );
}
