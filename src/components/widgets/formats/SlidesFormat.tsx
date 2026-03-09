import React from "react";
import { BaseFormatWidget } from "./BaseFormatWidget";
import { SlidesMenuIcon } from "./FormatIcons";
import { diagramSvgPaths } from "./svg-paths-diagrams";

// --- Internal Icons ---

const IconSparks = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none">
    <path d={diagramSvgPaths.p72aff80} fill="#E53935" />
  </svg>
);

const IconAddSlides = () => (
   <svg className="size-6" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="#E53935" strokeWidth="2" />
      <path d="M12 9v4M10 11h4" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
   </svg>
);

const IconLayout = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none">
     <path d={diagramSvgPaths.p269a700} stroke="#E53935" strokeWidth="2" />
     <path d="M3 9L21 9" stroke="#E53935" strokeWidth="2" />
     <path d={diagramSvgPaths.p154fac80} stroke="#E53935" strokeWidth="2" />
  </svg>
);

// --- Component ---

export function SlidesFormat({ selected, id }: { selected?: boolean; id?: string }) {
  return (
    <BaseFormatWidget
       icon={<SlidesMenuIcon />}
       title="Slides"
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
               Start your presentation: add slides or
             </h3>
             <div className="flex gap-2">
                {[
                  { icon: <IconSparks />, label: "Create with AI" },
                  { icon: <IconAddSlides />, label: "Add slides" },
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
