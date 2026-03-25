import React, { useState } from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { NudgeCard, MiniTimelinePreview } from "./NudgeCard";

const TimelineMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8h12M4 5v6M8 4v8M12 5v6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AVATAR_COLORS = ["#E53935", "#43A047", "#1E88E5", "#8E24AA", "#F4511E", "#00ACC1", "#6D4C41", "#C0CA33", "#5C6BC0"];

const RECORDS = [
  { title: "Refining the car's aerodynamics to...", avatar: 0, barColor: "#FFCDD2", barText: "#C62828", barLabel: "Refining the car's aerod...", start: 0, width: 2.5 },
  { title: "Implementing innovative wing desi...", avatar: 1, barColor: "#FFCDD2", barText: "#C62828", barLabel: "Impleme...", start: 1.5, width: 1.5 },
  { title: "Enhancing the efficiency and powe...", avatar: 2, barColor: "#C8E6C9", barText: "#2E7D32", barLabel: "Enhancing the efficiency and power ou...", start: 1, width: 3.5 },
  { title: "Implementing brake-by-wire syste...", avatar: 3, barColor: "#C8E6C9", barText: "#2E7D32", barLabel: "Implementing brake-by-wire systems for better contr...", start: 3.5, width: 4.5 },
  { title: "Integrating advanced driver assista...", avatar: 4, barColor: "#FFCDD2", barText: "#C62828", barLabel: "Integrating advanced driver assistance...", start: 0.5, width: 3 },
  { title: "Developing more efficient and responsi...", avatar: null, barColor: "#C8E6C9", barText: "#2E7D32", barLabel: "Developing more efficient and responsive braking sy...", start: 5, width: 4 },
  { title: "Fine-tuning the suspension system...", avatar: 5, barColor: "#C8E6C9", barText: "#2E7D32", barLabel: "Fine-tuni...", start: 0.5, width: 1.5 },
  { title: "Implementing predictive analytics t...", avatar: 3, barColor: "#FFF9C4", barText: "#F57F17", barLabel: "Implementing predictive analytics to h...", start: 6.5, width: 3.5 },
  { title: "Developing adaptive suspension sy...", avatar: 6, barColor: "#FFF9C4", barText: "#F57F17", barLabel: "Developing adaptive su...", start: 0, width: 2 },
];

const WEEKS = [
  { month: "September", days: ["2", "9", "16", "23"] },
  { month: "October", days: ["30", "7", "14", "21"] },
];

const SIDEBAR_WIDTH = 280;
const COL_WIDTH = 105;
const ROW_HEIGHT = 56;
const TOOLBAR_HEIGHT = 40;
const TOTAL_COLS = 8;
const TODAY_COL = 3.5;

export function TimelineFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  const [showNudge, setShowNudge] = useState(!!data?.showNudge);
  return (
    <>
    <BaseFormatWidget
      icon={<TimelineMenuIcon />}
      title="Product roadmap"
      formatType="timeline"
      selected={selected}
      id={id}
      className="w-[1145px] h-[637px]"
    >
      {/* Outer container */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        padding: 0, gap: 4, isolation: "isolate",
        position: "relative", width: 1145, height: 637.02,
        borderRadius: 8, background: "var(--card)",
        boxShadow: "0px 0px 0px 1px var(--border)",
        overflow: "hidden",
      }}>
        {/* Toolbar row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12, height: TOOLBAR_HEIGHT,
          width: "100%", paddingLeft: 12, flexShrink: 0, background: "#fff",
        }}>
          {["☐", "▽", "⇅", "☰", "◎"].map((icon, i) => (
            <div key={i} style={{
              width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
              color: "#7D8297", fontSize: 14, cursor: "pointer",
            }}>{icon}</div>
          ))}
        </div>

        {/* Navigation row */}
        <div style={{
          display: "flex", alignItems: "center", width: "100%", flexShrink: 0,
          height: 36, background: "#fff",
        }}>
          <div style={{
            width: SIDEBAR_WIDTH, flexShrink: 0, display: "flex", alignItems: "center",
            paddingLeft: 16, gap: 8,
          }}>
            <span style={{ fontSize: 13, color: "#7D8297", cursor: "pointer", fontFamily: "var(--font-noto)" }}>‹</span>
            <div style={{ width: 22, height: 22, borderRadius: 4, border: "1px solid #E0E2E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10, color: "#7D8297" }}>📅</span>
            </div>
            <span style={{ fontSize: 13, color: "#7D8297", cursor: "pointer", fontFamily: "var(--font-noto)" }}>›</span>
          </div>
          {/* Month labels in nav */}
          <div style={{ flex: 1, display: "flex" }}>
            {WEEKS.map((w, wi) => (
              <div key={wi} style={{ width: COL_WIDTH * w.days.length, paddingLeft: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#222428", fontFamily: "var(--font-noto)" }}>{w.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* timeline-milestones — the main grid block */}
        <div style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: 1,
          width: 1137,
          height: 549.02,
          background: "#E0E2E8",
          border: "1px solid #E0E2E8",
          borderRadius: 4,
          flex: "none",
          order: 2,
          flexGrow: 0,
          zIndex: 0,
          overflow: "hidden",
          marginLeft: 4,
        }}>
          {/* Week header row */}
          <div style={{
            display: "flex", width: "100%", height: 28, flexShrink: 0, background: "#fff",
          }}>
            <div style={{
              width: SIDEBAR_WIDTH - 8, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              paddingLeft: 16, paddingRight: 12,
            }}>
              <span style={{ fontSize: 11, color: "#7D8297", fontFamily: "var(--font-noto)" }}>
                {RECORDS.length} records
              </span>
              <span style={{ fontSize: 16, color: "#7D8297", cursor: "pointer", lineHeight: 1 }}>+</span>
            </div>
            {WEEKS.flatMap(w => w.days).map((d, i) => (
              <div key={i} style={{
                width: COL_WIDTH, flexShrink: 0, display: "flex", alignItems: "center", paddingLeft: 8,
                borderLeft: "1px solid #E0E2E8",
              }}>
                <span style={{ fontSize: 11, color: "#7D8297", fontFamily: "var(--font-noto)" }}>{d}</span>
              </div>
            ))}
          </div>

          {/* lower */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 0,
            gap: 1,
            width: 1137,
            height: 492.02,
            flex: "none",
            order: 1,
            alignSelf: "stretch",
            flexGrow: 0,
          }}>
            {/* Sidebar column */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 1,
              width: SIDEBAR_WIDTH - 8, flexShrink: 0,
            }}>
              {RECORDS.map((rec, ri) => (
                <div key={ri} style={{
                  display: "flex", alignItems: "center", height: ROW_HEIGHT - 2,
                  paddingLeft: 16, paddingRight: 12, gap: 8, background: "#fff",
                }}>
                  <span style={{
                    fontSize: 12, color: "#222428", fontFamily: "var(--font-noto)",
                    flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>{rec.title}</span>
                  {rec.avatar !== null && (
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                      background: AVATAR_COLORS[rec.avatar],
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 9, fontWeight: 600, fontFamily: "var(--font-noto)",
                    }}>
                      {rec.title.split(" ").slice(0, 2).map(w => w[0]).join("")}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Grid column */}
            <div style={{
              flex: 1, display: "flex", flexDirection: "column", gap: 1,
              position: "relative",
            }}>
              {RECORDS.map((rec, ri) => (
                <div key={ri} style={{
                  height: ROW_HEIGHT - 2, position: "relative", background: "#fff",
                }}>
                  {/* Column separators */}
                  {Array.from({ length: TOTAL_COLS }).map((_, i) => (
                    <div key={i} style={{
                      position: "absolute", left: i * COL_WIDTH, top: 0, bottom: 0,
                      width: i > 0 ? 1 : 0, background: "#E0E2E8",
                    }} />
                  ))}

                  {/* Bar */}
                  <div style={{
                    position: "absolute",
                    left: rec.start * COL_WIDTH + 4,
                    top: 11,
                    width: rec.width * COL_WIDTH - 8,
                    height: 32,
                    borderRadius: 6,
                    background: rec.barColor,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 10,
                    overflow: "hidden",
                  }}>
                    <span style={{
                      fontSize: 11, fontWeight: 500, color: rec.barText,
                      fontFamily: "var(--font-noto)", whiteSpace: "nowrap",
                      overflow: "hidden", textOverflow: "ellipsis",
                    }}>{rec.barLabel}</span>
                  </div>
                </div>
              ))}

              {/* Today dashed line */}
              <div style={{
                position: "absolute",
                left: TODAY_COL * COL_WIDTH,
                top: 0, bottom: 0,
                width: 0,
                borderLeft: "1.5px dashed #AEB2C0",
                zIndex: 3,
              }}>
                <div style={{
                  position: "absolute", top: -18, left: 6,
                  display: "flex", alignItems: "center", gap: 4,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#222428" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#222428", fontFamily: "var(--font-noto)" }}>Today</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </BaseFormatWidget>
      <NudgeCard
        show={showNudge}
        onDismiss={() => setShowNudge(false)}
        formatType="timeline"
        content={{
          preview: <MiniTimelinePreview />,
          title: "Flag risks in your plan?",
          description: "Your timeline has overlapping tasks and tight deadlines — I can flag potential risks and bottlenecks.",
          ctaLabel: "Flag risks",
        }}
      />
    </>
  );
}
