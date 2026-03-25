import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/* Shared keyframes for all nudge card preview animations */
function injectNudgeAnims() {
  if (typeof document === "undefined" || document.getElementById("nudge-anims")) return;
  const s = document.createElement("style");
  s.id = "nudge-anims";
  s.textContent = `
    @keyframes ntt-wave { 0%,100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } }
    @keyframes ntt-head { 0% { left: 10%; } 100% { left: 85%; } }
    @keyframes n-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
    @keyframes n-slide { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
    @keyframes n-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
    @keyframes n-grow { 0% { width: 0%; } 100% { width: 100%; } }
    @keyframes n-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    @keyframes n-dash { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
    @keyframes n-bounce { 0%,100% { transform: translateY(0); } 40% { transform: translateY(-2px); } 60% { transform: translateY(1px); } }
    @keyframes n-ring { 0% { r: 5; opacity: 0.5; } 50% { r: 9; opacity: 0.15; } 100% { r: 5; opacity: 0.5; } }
  `;
  document.head.appendChild(s);
}

export interface NudgeContent {
  title: string;
  description: string;
  ctaLabel: string;
  /** Mini preview rendered above the text */
  preview?: React.ReactNode;
  onCta?: () => void;
}

interface NudgeCardProps {
  show: boolean;
  onDismiss: () => void;
  content: NudgeContent;
  formatType?: string;
}

export function NudgeCard({ show, onDismiss, content, formatType }: NudgeCardProps) {
  const [nudgePos, setNudgePos] = useState<{ top: number; left: number } | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show || !anchorRef.current) { setNudgePos(null); return; }
    const update = () => {
      if (anchorRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        setNudgePos({ top: rect.top, left: rect.right });
      }
    };
    update();
    const id = setInterval(update, 100);
    return () => clearInterval(id);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div ref={anchorRef} style={{ position: "absolute", top: 0, left: "100%", width: 0, height: 0 }} />

      {nudgePos && createPortal(
        <div
          style={{
            position: "fixed",
            top: nudgePos.top,
            left: nudgePos.left + 12,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(34, 36, 40, 0.14), 0 0 0 0.5px rgba(0,0,0,0.05)",
            width: 220,
            maxHeight: 340,
            overflow: "hidden",
            zIndex: 9999,
            animation: "fadeSlideIn 400ms ease-out both",
            padding: "8px 8px 0 8px",
          }}
        >
          {/* Mini preview area */}
          {content.preview && (
            <div style={{ background: "#F7F7F8", borderRadius: 4, padding: "8px 6px", marginBottom: 2 }}>
              {content.preview}
            </div>
          )}

          {/* Text + buttons */}
          <div style={{ padding: "10px 4px 12px" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#222428", lineHeight: 1.3, marginBottom: 3, fontFamily: "var(--font-noto)" }}>
              {content.title}
            </div>
            <div style={{ fontSize: 10, fontWeight: 400, color: "#6f7489", lineHeight: 1.4, marginBottom: 10, fontFamily: "var(--font-noto)" }}>
              {content.description}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                onClick={(e) => { e.stopPropagation(); content.onCta?.(); onDismiss(); (window as any).__pendingFormatAction = content.ctaLabel; (window as any).__openAiPanel?.(formatType); }}
                style={{ background: "#3859FF", color: "#fff", border: "none", borderRadius: 6, padding: "5px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer", lineHeight: 1.3, whiteSpace: "nowrap", fontFamily: "var(--font-noto)" }}
              >
                {content.ctaLabel}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onDismiss(); }}
                style={{ background: "transparent", color: "#222428", border: "none", padding: "5px 8px", fontSize: 11, fontWeight: 500, cursor: "pointer", lineHeight: 1.3, whiteSpace: "nowrap", fontFamily: "var(--font-noto)" }}
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

/* ─── Reusable mini-preview builders ─── */

/** Mini table preview (matches the Table nudge card) */
export function MiniTablePreview({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 8, fontFamily: "var(--font-noto)", tableLayout: "fixed" }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={{
              fontWeight: 600, color: "#7C3AED",
              padding: "3px 2px", textAlign: "center",
              background: "rgba(124, 58, 237, 0.08)",
              borderBottom: "1px solid #E9EAEF",
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>{h}</th>
          ))}
          <th style={{ fontWeight: 600, color: "#AEB2C0", padding: "3px 2px", textAlign: "center", borderBottom: "1px solid #E9EAEF", width: 16 }}>=</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci} style={{
                padding: "3px 2px", textAlign: "center", color: "#222428", fontSize: 8,
                background: "rgba(124, 58, 237, 0.04)",
              }}>{cell}</td>
            ))}
            <td style={{ padding: "3px 2px", textAlign: "center", color: "#9CA3AF", fontWeight: 600, fontSize: 8, width: 16 }}>?</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Slides — purple bg with typewriter text */
export function MiniSlidesPreview() {
  injectNudgeAnims();
  return (
    <div style={{ height: 44, borderRadius: 4, background: "linear-gradient(135deg, #A78BFA, #C4B5FD)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{
        background: "rgba(255,255,255,0.92)", borderRadius: 3, padding: "3px 8px",
        display: "flex", alignItems: "center", gap: 2,
        overflow: "hidden",
      }}>
        <span style={{
          fontSize: 6, color: "#6f7489", fontFamily: "var(--font-noto)", fontStyle: "italic",
          whiteSpace: "nowrap", overflow: "hidden",
          animation: "n-grow 2.5s steps(30) 0.3s both",
          display: "inline-block",
        }}>
          Welcome everyone to today's...
        </span>
        <div style={{ width: 1, height: 8, background: "#7C3AED", flexShrink: 0, animation: "n-blink 1s step-end infinite" }} />
      </div>
    </div>
  );
}

/** Diagram — nodes with animated warning blink on dead end */
export function MiniDiagramPreview() {
  injectNudgeAnims();
  return (
    <svg width="100%" height="48" viewBox="0 0 196 48" fill="none" style={{ overflow: "visible" }}>
      {/* Main flow — compact */}
      <rect x="2" y="10" width="30" height="14" rx="7" fill="#6C5CE7" />
      <text x="17" y="20" fill="#fff" fontSize="5.5" textAnchor="middle" fontFamily="var(--font-noto)" fontWeight="600">Start</text>
      <line x1="32" y1="17" x2="42" y2="17" stroke="#9CA3AF" strokeWidth="0.8" />
      <rect x="42" y="7" width="34" height="20" rx="3" fill="#F3F0FF" stroke="#6C5CE7" strokeWidth="0.8" />
      <text x="59" y="20" fill="#222" fontSize="5" textAnchor="middle" fontFamily="var(--font-noto)">Process</text>
      <line x1="76" y1="17" x2="86" y2="17" stroke="#9CA3AF" strokeWidth="0.8" />
      {/* Decision diamond */}
      <rect x="93" y="10" width="14" height="14" rx="1.5" transform="rotate(45 100 17)" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.8" />
      <text x="100" y="20" fill="#92400E" fontSize="5" textAnchor="middle" fontFamily="var(--font-noto)" fontWeight="600">?</text>
      {/* Yes path */}
      <line x1="110" y1="17" x2="125" y2="17" stroke="#10B981" strokeWidth="0.8" />
      <rect x="125" y="10" width="30" height="14" rx="7" fill="#10B981" />
      <text x="140" y="20" fill="#fff" fontSize="5.5" textAnchor="middle" fontFamily="var(--font-noto)" fontWeight="600">Done</text>
      {/* No path — animated dead end */}
      <line x1="100" y1="27" x2="100" y2="34" stroke="#EF4444" strokeWidth="0.8" strokeDasharray="4 2" style={{ animation: "n-dash 1.5s linear infinite" } as any} />
      <circle cx="100" cy="40" r="5" fill="#FEF2F2" stroke="#EF4444" strokeWidth="0.8" style={{ animation: "n-bounce 1.2s ease-in-out infinite" } as any} />
      <text x="100" y="42.5" fill="#EF4444" fontSize="6" textAnchor="middle" fontWeight="700" style={{ animation: "n-bounce 1.2s ease-in-out infinite" } as any}>!</text>
      {/* Expanding ring */}
      <circle cx="100" cy="40" r="5" fill="none" stroke="#EF4444" strokeWidth="0.5" opacity="0.3" style={{ animation: "n-ring 2s ease-in-out infinite" } as any} />
      {/* Dashed highlight circle */}
      <circle cx="100" cy="37" r="11" fill="none" stroke="#EF4444" strokeWidth="0.8" strokeDasharray="2 1" style={{ animation: "n-pulse 1.5s ease-in-out infinite" } as any} />
    </svg>
  );
}

/** Prototype — screens with gentle float animation */
export function MiniPrototypePreview() {
  injectNudgeAnims();
  const f = "var(--font-noto)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", padding: "2px 0" }}>
      {[
        { color: "#6C5CE7", label: "Home" },
        { color: "#3B82F6", label: "Cart" },
        { color: "#10B981", label: "Pay" },
      ].map((s, i) => (
        <React.Fragment key={i}>
          <div style={{
            width: 30, height: 42, borderRadius: 5, border: `1.5px solid ${s.color}`,
            background: "#fff", display: "flex", flexDirection: "column", overflow: "hidden",
            animation: `n-float 2.5s ease-in-out ${i * 0.3}s infinite`,
          }}>
            <div style={{ height: 7, background: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 4, fontWeight: 600, fontFamily: f }}>{s.label}</span>
            </div>
            <div style={{ flex: 1, padding: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
              <div style={{ height: 2, borderRadius: 1, background: "#E5E7EB", width: "80%" }} />
              <div style={{ height: 2, borderRadius: 1, background: "#E5E7EB", width: "60%" }} />
            </div>
          </div>
          {i < 2 && (
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5h6M6 3l2 2-2 2" stroke="#9CA3AF" strokeWidth="1" fill="none" /></svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/** Timeline — gantt bars with animated overlap warning */
export function MiniTimelinePreview() {
  injectNudgeAnims();
  const f = "var(--font-noto)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Header */}
      <div style={{ display: "flex", gap: 2, paddingLeft: 30 }}>
        {["W1", "W2", "W3", "W4"].map(w => (
          <span key={w} style={{ fontSize: 5, color: "#9CA3AF", fontFamily: f, width: 40, textAlign: "center" }}>{w}</span>
        ))}
      </div>
      {/* Rows */}
      <div style={{ position: "relative" }}>
        {[
          { label: "Design", color: "#3859FF", start: 0, w: 55 },
          { label: "Dev", color: "#1C8F00", start: 25, w: 80 },
          { label: "QA", color: "#FFD02F", start: 70, w: 50 },
        ].map((bar, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", height: 12 }}>
            <span style={{ fontSize: 6, color: "#6f7489", fontFamily: f, width: 30, textAlign: "right", paddingRight: 4 }}>{bar.label}</span>
            <div style={{ flex: 1, position: "relative", height: "100%" }}>
              <div style={{
                position: "absolute", left: bar.start, width: bar.w, height: 9,
                borderRadius: 3, background: bar.color, opacity: 0.2, top: 1,
              }} />
              <div style={{
                position: "absolute", left: bar.start, width: bar.w, height: 9,
                borderRadius: 3, border: `1px solid ${bar.color}60`, top: 1,
              }} />
            </div>
          </div>
        ))}
        {/* Red circle highlighting the overlap zone between Dev and QA */}
        <div style={{
          position: "absolute",
          left: 94, top: 4,
          width: 28, height: 28,
          borderRadius: "50%",
          border: "1.5px solid #EF4444",
          background: "rgba(239, 68, 68, 0.06)",
          pointerEvents: "none",
          animation: "n-pulse 1.5s ease-in-out infinite",
        }} />
      </div>
    </div>
  );
}

/** Doc — TL;DR chip + colored lines appearing one by one */
export function MiniDocPreview() {
  injectNudgeAnims();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{
        display: "inline-flex", alignSelf: "flex-start",
        background: "rgba(124,58,237,0.08)", borderRadius: 3, padding: "2px 6px",
      }}>
        <span style={{ fontSize: 6, fontWeight: 700, color: "#7C3AED", fontFamily: "var(--font-noto)" }}>TL;DR</span>
      </div>
      {[
        { w: "92%", color: "#7C3AED", delay: 0.3 },
        { w: "78%", color: "#A78BFA", delay: 0.7 },
        { w: "65%", color: "#C4B5FD", delay: 1.1 },
      ].map((line, i) => (
        <div key={i} style={{ height: 3, borderRadius: 2, background: "rgba(124,58,237,0.06)", overflow: "hidden" }}>
          <div style={{
            height: "100%", width: line.w, borderRadius: 2,
            background: line.color, opacity: 0.35,
            animation: `n-grow 1.5s ease-out ${line.delay}s both`,
          }} />
        </div>
      ))}
    </div>
  );
}

/** Talktrack — animated waveform + speaker lanes with moving playhead */
export function MiniTalktrackPreview() {
  // Inject keyframes once
  injectNudgeAnims();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, position: "relative", overflow: "hidden" }}>
      {/* Waveform — animated bars */}
      <div style={{ display: "flex", alignItems: "center", gap: 0.8, height: 18, padding: "0 2px" }}>
        {[2,6,2,10,14,2,8,16,2,12,18,14,2,8,20,16,10,2,6,12,18,2,10,14,8,2,12,6,2,16,12,2,8,18,2,10,20,14,2,10,6,2,12,8].map((h, i) => (
          <div key={i} style={{
            width: 1.5, borderRadius: 0.75, flexShrink: 0,
            height: h * 0.7,
            background: "#9CA3AF",
            transformOrigin: "bottom",
            animation: `ntt-wave ${0.4 + (i % 7) * 0.12}s ease-in-out ${i * 0.04}s infinite`,
            opacity: 0.55,
          }} />
        ))}
      </div>
      {/* Speaker lane — green */}
      <div style={{ display: "flex", alignItems: "center", gap: 1, height: 5, background: "#F3F4F6", borderRadius: 3, padding: "0 1px" }}>
        {[4,2,12,3,8,2,16,3,4,2,6,2,20,2,14].map((w, i) => (
          <div key={i} style={{ width: w, height: i % 2 === 0 ? 4 : 2, borderRadius: 2, background: i % 2 === 0 ? "#22C55E" : "transparent", flexShrink: 0 }} />
        ))}
      </div>
      {/* Speaker lane — purple */}
      <div style={{ display: "flex", alignItems: "center", gap: 1, height: 5, background: "#F3F4F6", borderRadius: 3, padding: "0 1px" }}>
        {[3,6,4,8,3,4,10,3,6,2,4,4,8,3,6].map((w, i) => (
          <div key={i} style={{ width: w, height: i % 2 === 0 ? 4 : 2, borderRadius: 2, background: i % 2 === 0 ? "#7C3AED" : "transparent", flexShrink: 0 }} />
        ))}
      </div>
      {/* Animated playhead — sweeps across */}
      <div style={{
        position: "absolute", top: 0, bottom: 0,
        width: 1, background: "#7C3AED",
        animation: "ntt-head 4s linear infinite",
      }}>
        <div style={{ position: "absolute", top: -1, left: -2.5, width: 6, height: 6, borderRadius: "50%", background: "#7C3AED" }} />
      </div>
    </div>
  );
}
