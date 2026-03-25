import React, { useState } from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { DiagramMenuIcon } from "./FormatIcons";
import { cn } from "../../ui/utils";
import { diagramSvgPaths } from "./svg-paths-diagrams";
import { NudgeCard, MiniDiagramPreview } from "./NudgeCard";

// --- Internal Icons ---

const IconSparks = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none">
    <path d={diagramSvgPaths.p72aff80} fill="#8167E5" />
  </svg>
);

const IconCurveSquareCircleArrow = () => (
   <svg className="size-6" viewBox="0 0 24 24" fill="none">
      <g>
        <path d={diagramSvgPaths.p284ea980} stroke="#DA792B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M15 10V10.0001" stroke="#DA792B" strokeWidth="2" />
      </g>
   </svg>
);

const IconLayout = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none">
     <path d={diagramSvgPaths.p269a700} stroke="#DA792B" strokeWidth="2" />
     <path d="M3 9L21 9" stroke="#DA792B" strokeWidth="2" />
     <path d={diagramSvgPaths.p154fac80} stroke="#DA792B" strokeWidth="2" />
  </svg>
);

// --- Components ---

function ActionCard({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 w-[198px] py-8 px-4 bg-[var(--background)] rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
       <div className="group-hover:scale-110 transition-transform duration-200">
         {icon}
       </div>
       <span className="font-[family-name:var(--font-noto)] font-semibold text-[14px] text-[var(--foreground)] text-center leading-none">
         {label}
       </span>
    </div>
  )
}

export function DiagramFormat({ selected, data, id }: { selected?: boolean; data?: any; id?: string }) {
  const [showNudge, setShowNudge] = useState(!!data?.showNudge);
  return (
    <>
    <BaseFormatWidget
       icon={<DiagramMenuIcon />}
       title="Diagram"
       formatType="diagram"
       selected={selected}
       id={id}
       className="w-[1215px] h-[693px]"
    >
       <div style={{ width: 1215, height: 693, background: "#fff", borderRadius: 8, border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
         <svg width="1215" height="693" viewBox="0 0 1215 693" fill="none" style={{ position: "absolute", top: 0, left: 0 }}>
           {/* Arrows */}
           <defs>
             <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
               <path d="M0,0 L8,3 L0,6" fill="#9CA3AF" />
             </marker>
           </defs>
           {/* Start → Research */}
           <line x1="607" y1="95" x2="607" y2="140" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
           {/* Research → Decision */}
           <line x1="607" y1="200" x2="607" y2="255" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
           {/* Decision → Yes (Design) */}
           <line x1="520" y1="310" x2="380" y2="390" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
           {/* Decision → No (Pivot) */}
           <line x1="694" y1="310" x2="834" y2="390" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
           {/* Design → Build */}
           <line x1="340" y1="450" x2="340" y2="505" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
           {/* Build → Launch */}
           <line x1="340" y1="565" x2="340" y2="610" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
           {/* Pivot → Research (loop back) */}
           <path d="M 875 450 L 875 480 Q 875 500 855 500 L 700 500 Q 680 500 680 480 L 680 200 Q 680 180 660 180 L 650 180" stroke="#9CA3AF" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="6 3" />
           {/* Yes/No labels */}
           <text x="440" y="360" fill="#16A34A" fontSize="12" fontWeight="600" fontFamily="var(--font-noto)">Yes</text>
           <text x="740" y="360" fill="#DC2626" fontSize="12" fontWeight="600" fontFamily="var(--font-noto)">No</text>
         </svg>

         {/* Start - rounded pill */}
         <div style={{ position: "absolute", left: 532, top: 50, width: 150, height: 45, borderRadius: 22, background: "#6C5CE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-noto)" }}>Start</span>
         </div>

         {/* Research - rectangle */}
         <div style={{ position: "absolute", left: 497, top: 145, width: 220, height: 55, borderRadius: 8, background: "#F3F0FF", border: "2px solid #6C5CE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "#222", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-noto)" }}>User Research</span>
         </div>

         {/* Decision diamond - rotated square */}
         <div style={{ position: "absolute", left: 553, top: 255, width: 108, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
           <div style={{ width: 80, height: 80, background: "#FEF3C7", border: "2px solid #F59E0B", transform: "rotate(45deg)", position: "absolute" }} />
           <span style={{ color: "#222", fontSize: 12, fontWeight: 600, fontFamily: "var(--font-noto)", zIndex: 1 }}>Viable?</span>
         </div>

         {/* Design - rectangle */}
         <div style={{ position: "absolute", left: 230, top: 395, width: 220, height: 55, borderRadius: 8, background: "#ECFDF5", border: "2px solid #10B981", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "#222", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-noto)" }}>Design Solution</span>
         </div>

         {/* Pivot - rectangle */}
         <div style={{ position: "absolute", left: 765, top: 395, width: 220, height: 55, borderRadius: 8, background: "#FEF2F2", border: "2px solid #EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "#222", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-noto)" }}>Pivot Approach</span>
         </div>

         {/* Build - rectangle */}
         <div style={{ position: "absolute", left: 230, top: 510, width: 220, height: 55, borderRadius: 8, background: "#EFF6FF", border: "2px solid #3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "#222", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-noto)" }}>Build & Test</span>
         </div>

         {/* Launch - rounded pill */}
         <div style={{ position: "absolute", left: 265, top: 615, width: 150, height: 45, borderRadius: 22, background: "#6C5CE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-noto)" }}>Launch</span>
         </div>
       </div>
    </BaseFormatWidget>
      <NudgeCard
        show={showNudge}
        onDismiss={() => setShowNudge(false)}
        formatType="diagram"
        content={{
          preview: <MiniDiagramPreview />,
          title: "Spot missing paths or loops?",
          description: "Your diagram has decision nodes — I can check for missing paths, dead ends, or infinite loops.",
          ctaLabel: "Check diagram",
        }}
      />
    </>
  );
}
