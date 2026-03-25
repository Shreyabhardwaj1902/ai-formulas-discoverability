import React, { useState } from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { PrototypeMenuIcon } from "./FormatIcons";
import { diagramSvgPaths } from "./svg-paths-diagrams";
import { NudgeCard, MiniPrototypePreview } from "./NudgeCard";

// --- Internal Icons ---

const IconSparks = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none">
    <path d={diagramSvgPaths.p72aff80} fill="#8167E5" />
  </svg>
);

const IconAddScreens = () => (
   <svg className="size-6" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="4" width="14" height="16" rx="2" stroke="#8167E5" strokeWidth="2" />
      <path d="M12 10v4M10 12h4" stroke="#8167E5" strokeWidth="2" strokeLinecap="round" />
   </svg>
);

const IconLayout = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none">
     <path d={diagramSvgPaths.p269a700} stroke="#8167E5" strokeWidth="2" />
     <path d="M3 9L21 9" stroke="#8167E5" strokeWidth="2" />
     <path d={diagramSvgPaths.p154fac80} stroke="#8167E5" strokeWidth="2" />
  </svg>
);

// --- Component ---

export function PrototypeFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  const [showNudge, setShowNudge] = useState(!!data?.showNudge);
  return (
    <>
    <BaseFormatWidget
       icon={<PrototypeMenuIcon />}
       title="Prototype"
       formatType="prototype"
       selected={selected}
       id={id}
       className="w-[865px] h-[560px]"
    >
       <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: 16, gap: 16, width: 865, height: 560 }}>
          {/* Phone screen mockups */}
          {[
            { label: "Home", bg: "#F8F9FA", content: (
              <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff" }}>
                <div style={{ padding: "40px 20px 20px", background: "#6C5CE7" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 4, fontFamily: "var(--font-noto)" }}>Welcome back</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontFamily: "var(--font-noto)" }}>Dashboard</div>
                </div>
                <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <div style={{ background: "#F3F0FF", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 10, color: "#6C5CE7", fontWeight: 600, marginBottom: 6, fontFamily: "var(--font-noto)" }}>Quick Actions</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {["Transfer", "Pay", "Request"].map(a => (
                        <div key={a} style={{ flex: 1, background: "#fff", borderRadius: 8, padding: "10px 4px", textAlign: "center", fontSize: 9, color: "#333", fontFamily: "var(--font-noto)" }}>{a}</div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: "#F8F9FA", borderRadius: 12, padding: 12 }}>
                    <div style={{ fontSize: 10, color: "#666", fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-noto)" }}>Recent</div>
                    {["Coffee Shop  –$4.50", "Grocery Store  –$32.10", "Subscription  –$9.99"].map(t => (
                      <div key={t} style={{ fontSize: 9, color: "#333", padding: "6px 0", borderBottom: "1px solid #eee", fontFamily: "var(--font-noto)" }}>{t}</div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", borderTop: "1px solid #eee" }}>
                  {["Home", "Cards", "Send", "Profile"].map(t => (
                    <div key={t} style={{ fontSize: 8, color: t === "Home" ? "#6C5CE7" : "#999", textAlign: "center", fontFamily: "var(--font-noto)" }}>{t}</div>
                  ))}
                </div>
              </div>
            )},
            { label: "Cards", bg: "#F8F9FA", content: (
              <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff" }}>
                <div style={{ padding: "40px 20px 20px" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#222", fontFamily: "var(--font-noto)" }}>My Cards</div>
                </div>
                <div style={{ padding: "8px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ background: "linear-gradient(135deg, #6C5CE7, #a29bfe)", borderRadius: 14, padding: 16, color: "#fff" }}>
                    <div style={{ fontSize: 9, opacity: 0.8, marginBottom: 16, fontFamily: "var(--font-noto)" }}>Virtual Card</div>
                    <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, marginBottom: 12, fontFamily: "var(--font-noto)" }}>•••• •••• •••• 4289</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, opacity: 0.8, fontFamily: "var(--font-noto)" }}>
                      <span>Exp 09/27</span><span>$12,450.00</span>
                    </div>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, #00b894, #55efc4)", borderRadius: 14, padding: 16, color: "#fff" }}>
                    <div style={{ fontSize: 9, opacity: 0.8, marginBottom: 16, fontFamily: "var(--font-noto)" }}>Savings Card</div>
                    <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, marginBottom: 12, fontFamily: "var(--font-noto)" }}>•••• •••• •••• 7831</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, opacity: 0.8, fontFamily: "var(--font-noto)" }}>
                      <span>Exp 03/28</span><span>$5,230.00</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", borderTop: "1px solid #eee" }}>
                  {["Home", "Cards", "Send", "Profile"].map(t => (
                    <div key={t} style={{ fontSize: 8, color: t === "Cards" ? "#6C5CE7" : "#999", textAlign: "center", fontFamily: "var(--font-noto)" }}>{t}</div>
                  ))}
                </div>
              </div>
            )},
            { label: "Send", bg: "#F8F9FA", content: (
              <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff" }}>
                <div style={{ padding: "40px 20px 20px" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#222", fontFamily: "var(--font-noto)" }}>Send Money</div>
                </div>
                <div style={{ padding: "8px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <div style={{ fontSize: 32, fontWeight: 700, color: "#222", fontFamily: "var(--font-noto)" }}>$0.00</div>
                    <div style={{ fontSize: 10, color: "#999", marginTop: 4, fontFamily: "var(--font-noto)" }}>Enter amount</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "#666", fontWeight: 600, marginBottom: 8, fontFamily: "var(--font-noto)" }}>Recent contacts</div>
                    <div style={{ display: "flex", gap: 12 }}>
                      {["AK", "JB", "ML", "NR"].map((init, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                          <div style={{ width: 36, height: 36, borderRadius: "50%", background: ["#6C5CE7", "#00b894", "#fdcb6e", "#e17055"][i], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 600, fontFamily: "var(--font-noto)" }}>{init}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: "#6C5CE7", borderRadius: 12, padding: "12px 0", textAlign: "center", color: "#fff", fontSize: 12, fontWeight: 600, marginTop: "auto", fontFamily: "var(--font-noto)" }}>
                    Continue
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", borderTop: "1px solid #eee" }}>
                  {["Home", "Cards", "Send", "Profile"].map(t => (
                    <div key={t} style={{ fontSize: 8, color: t === "Send" ? "#6C5CE7" : "#999", textAlign: "center", fontFamily: "var(--font-noto)" }}>{t}</div>
                  ))}
                </div>
              </div>
            )},
          ].map((screen, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "var(--font-noto)", fontWeight: 500 }}>{i + 1}. {screen.label}</span>
              <div style={{
                width: 280,
                height: 500,
                borderRadius: 24,
                background: "#fff",
                border: "1px solid #E5E7EB",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                {screen.content}
              </div>
              {/* Connection dots */}
              {i < 2 && (
                <div style={{ position: "absolute", right: -16, top: "50%", width: 8, height: 8, borderRadius: "50%", background: "#6C5CE7" }} />
              )}
            </div>
          ))}
       </div>
    </BaseFormatWidget>
      <NudgeCard
        show={showNudge}
        onDismiss={() => setShowNudge(false)}
        formatType="prototype"
        content={{
          preview: <MiniPrototypePreview />,
          title: "Generate test flow?",
          description: "Your prototype has 3 screens — I can generate a test flow to validate the user journey.",
          ctaLabel: "Generate flow",
        }}
      />
    </>
  );
}
