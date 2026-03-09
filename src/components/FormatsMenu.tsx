import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuIconSlot,
} from "./ui/dropdown-menu";
import { Toolbar } from "@mirohq/design-system";
import svgPaths from "../imports/svg-wi134zte8t";
import { useState } from "react";

const PlusBoxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g>
      <path d={svgPaths.p2c9f5180} fill="currentColor" />
      <path d={svgPaths.pd550f80} fill="currentColor" />
    </g>
  </svg>
);

// Icons from BackupOption.tsx
const FrameIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p1efc2400} fill="var(--foreground)" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.pf474100} fill="#0E9DCD" fillRule="evenodd" />
  </svg>
);

const DiagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.p23391d80} fill="#DA792B" fillRule="evenodd" />
  </svg>
);

const TableIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.p8fe9080} fill="#0FA83C" fillRule="evenodd" />
  </svg>
);

const TimelineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.pdbac000} fill="#0FA83C" fillRule="evenodd" />
    <path clipRule="evenodd" d={svgPaths.p2f293d00} fill="#0FA83C" fillRule="evenodd" />
    <path clipRule="evenodd" d={svgPaths.p272d0a80} fill="#0FA83C" fillRule="evenodd" />
  </svg>
);

const KanbanIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.p2f85fc00} fill="#0FA83C" fillRule="evenodd" />
  </svg>
);

const PrototypeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p9f0c900} fill="#8167E5" />
  </svg>
);

const SlidesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p4adad70} fill="#DB4F4F" />
    <path d={svgPaths.p2421c780} fill="#DB4F4F" />
    <path d={svgPaths.p4467700} fill="#DB4F4F" />
    <path d={svgPaths.p2242f400} fill="#DB4F4F" />
  </svg>
);

const FlowsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p5e63a00} fill="url(#paint0_linear_2_5806)" />
    <path d={svgPaths.p3ec46600} fill="url(#paint1_linear_2_5806)" />
    <path d={svgPaths.p1d182780} fill="url(#paint2_linear_2_5806)" />
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_5806" x1="3.5997" x2="13.3354" y1="12.869" y2="2.37213">
        <stop stopColor="#314CD9" />
        <stop offset="0.2" stopColor="#6355E3" />
        <stop offset="0.6" stopColor="#975EED" />
        <stop offset="1" stopColor="#C966F6" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_5806" x1="3.5997" x2="13.3354" y1="12.869" y2="2.37213">
        <stop stopColor="#314CD9" />
        <stop offset="0.2" stopColor="#6355E3" />
        <stop offset="0.6" stopColor="#975EED" />
        <stop offset="1" stopColor="#C966F6" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2_5806" x1="3.5997" x2="13.3354" y1="12.869" y2="2.37213">
        <stop stopColor="#314CD9" />
        <stop offset="0.2" stopColor="#6355E3" />
        <stop offset="0.6" stopColor="#975EED" />
        <stop offset="1" stopColor="#C966F6" />
      </linearGradient>
    </defs>
  </svg>
);

interface FormatsMenuProps {
  onSelect?: (format: string) => void;
}

export function FormatsMenu({ onSelect }: FormatsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (format: string) => {
    setIsOpen(false);
    onSelect?.(format);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Toolbar.Icon active={isOpen} aria-label="Formats">
          <PlusBoxIcon />
        </Toolbar.Icon>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start" sideOffset={12} className="w-[250px]">
        <DropdownMenuItem onClick={() => handleSelect("frame")}>
          <DropdownMenuIconSlot>
            <FrameIcon />
          </DropdownMenuIconSlot>
          Frame
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => handleSelect("document")}>
          <DropdownMenuIconSlot>
            <DocumentIcon />
          </DropdownMenuIconSlot>
          Document
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("diagram")}>
          <DropdownMenuIconSlot>
            <DiagramIcon />
          </DropdownMenuIconSlot>
          Diagram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("table")}>
          <DropdownMenuIconSlot>
            <TableIcon />
          </DropdownMenuIconSlot>
          Table
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("timeline")}>
          <DropdownMenuIconSlot>
            <TimelineIcon />
          </DropdownMenuIconSlot>
          Timeline
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("kanban")}>
          <DropdownMenuIconSlot>
            <KanbanIcon />
          </DropdownMenuIconSlot>
          Kanban
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("prototype")}>
          <DropdownMenuIconSlot>
            <PrototypeIcon />
          </DropdownMenuIconSlot>
          Prototype
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("slides")}>
          <DropdownMenuIconSlot>
            <SlidesIcon />
          </DropdownMenuIconSlot>
          Slides
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => handleSelect("flows")}>
          <DropdownMenuIconSlot>
            <FlowsIcon />
          </DropdownMenuIconSlot>
          Flows
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
