import React, { useState } from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { NudgeCard, MiniTalktrackPreview } from "./NudgeCard";

const TalktrackMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="2" width="14" height="12" rx="3" fill="#4ECDC4" opacity="0.2"/>
    <rect x="1" y="2" width="14" height="12" rx="3" stroke="#4ECDC4" strokeWidth="1.2"/>
    <path d="M6.5 5.5v5l4-2.5-4-2.5z" fill="#4ECDC4"/>
  </svg>
);

export function TalktrackFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  const [showNudge, setShowNudge] = useState(!!data?.showNudge);
  return (
    <>
    <BaseFormatWidget
      icon={<TalktrackMenuIcon />}
      title="H1 Team Priorities"
      formatType="talktrack"
      selected={selected}
      id={id}
      className="w-[807px] h-[482px]"
    >
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        padding: 0, gap: 4, isolation: "isolate",
        position: "relative", width: 807.35, height: 481.55,
      }}>
        <div style={{
          width: "100%", height: "100%",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(34, 36, 40, 0.10), 0 1px 4px rgba(34, 36, 40, 0.06)",
          overflow: "hidden",
          position: "relative",
          padding: "3px 8px",
        }}>
          <img
            src="/talktrack-table.png"
            alt="H1 Team Priorities table"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }}
          />
          {/* Play button overlay */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 72, height: 72, borderRadius: "50%",
            background: "rgba(34, 36, 40, 0.55)",
            backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.5v13l11-6.5L8 5.5z" fill="#fff"/>
            </svg>
          </div>
        </div>
      </div>
    </BaseFormatWidget>
      <NudgeCard
        show={showNudge}
        onDismiss={() => setShowNudge(false)}
        formatType="talktrack"
        content={{
          preview: <MiniTalktrackPreview />,
          title: "Generate a transcript?",
          description: "Your talktrack has a recording — I can generate a transcript and extract key action items.",
          ctaLabel: "Generate transcript",
        }}
      />
    </>
  );
}
