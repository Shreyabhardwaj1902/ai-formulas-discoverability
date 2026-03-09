import React from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { DiagramMenuIcon } from "./FormatIcons";
import { cn } from "../../ui/utils";
import { diagramSvgPaths } from "./svg-paths-diagrams";

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

export function DiagramFormat({ selected, id }: { selected?: boolean; id?: string }) {
  return (
    <BaseFormatWidget
       icon={<DiagramMenuIcon />}
       title="Diagram"
       selected={selected}
       id={id}
       className="w-[802px] h-[451px]"
    >
       <div className="w-[802px] h-[451px] bg-[var(--background)] rounded-[var(--radius-lg)] border border-[var(--border)] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Dashed Border Inner */}
          <div className="absolute inset-4 border border-[var(--border)] border-dashed rounded-[var(--radius-lg)] pointer-events-none" />
          
          {/* Content */}
          <div className="flex flex-col items-center gap-8 z-10 pointer-events-auto">
             <h3 className="font-[family-name:var(--font-noto)] font-semibold text-[14px] text-[var(--muted-foreground)]">
               Start your diagram: drag shapes or
             </h3>
             <div className="flex gap-2">
                {[
                  { icon: <IconSparks />, label: "Create with AI" },
                  { icon: <IconCurveSquareCircleArrow />, label: "Add shapes" },
                  { icon: <IconLayout />, label: "Start with a template" }
                ].map((item, index) => (
                  <div key={index} className="group flex flex-col items-center justify-center gap-4 w-[198px] py-8 px-4 bg-[var(--background)] rounded-[var(--radius-lg)] border border-[var(--border)] cursor-pointer">
                     <div className="group-hover:scale-110 transition-transform duration-200">
                       {item.icon}
                     </div>
                     <span className="font-[family-name:var(--font-noto)] font-semibold text-[14px] text-[var(--foreground)] text-center leading-none">
                       {item.label}
                     </span>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </BaseFormatWidget>
  );
}
