import React from "react";
import { 
  Table, 
  RefreshCw, 
  Filter, 
  ArrowUpDown, 
  LayoutGrid, 
  EyeOff, 
  Bookmark, 
  AlignLeft, 
  MousePointer2, 
  Link2, 
  User, 
  Plus, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  FileText,
  Maximize2,
  MoreVertical,
  Hash,
  List,
  CheckSquare,
  Sigma,
  ArrowUpRight,
  Tag,
  ArrowRight,
  ArrowLeft,
  ListChecks
} from "lucide-react";
import svgPaths from "../../../imports/svg-wi134zte8t";
import { diagramSvgPaths } from "./svg-paths-diagrams";

// --- Colored Menu Icons (Brand/Format Identity) ---

export const DocumentMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.pf474100} fill="#0E9DCD" fillRule="evenodd" />
  </svg>
);

export const TableMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path clipRule="evenodd" d={svgPaths.p8fe9080} fill="#0FA83C" fillRule="evenodd" />
  </svg>
);

export const DiagramMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g>
      <path d={diagramSvgPaths.p19a89c00} stroke="#DA792B" strokeWidth="1.5" />
      <path d={diagramSvgPaths.p165cf600} stroke="#DA792B" strokeWidth="1.5" />
      <rect x="2" y="6" width="4" height="4" rx="1.5" stroke="#DA792B" strokeWidth="1.5" />
      <rect x="9.33333" y="2" width="4" height="4" rx="1.5" stroke="#DA792B" strokeWidth="1.5" />
      <rect x="9.33333" y="10" width="4" height="4" rx="1.5" stroke="#DA792B" strokeWidth="1.5" />
    </g>
  </svg>
);

export const PrototypeMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p9f0c900} fill="#8167E5" />
  </svg>
);

export const SlidesMenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p4adad70} fill="#DB4F4F" />
    <path d={svgPaths.p2421c780} fill="#DB4F4F" />
    <path d={svgPaths.p4467700} fill="#DB4F4F" />
    <path d={svgPaths.p2242f400} fill="#DB4F4F" />
  </svg>
);

// --- UI Icons (Lucide Wrappers) ---
// We wrap them to ensure consistent sizing (16px) and styling as used in the components.

const IconWrapper = ({ Icon, className, ...props }: { Icon: any, className?: string } & React.SVGProps<SVGSVGElement>) => (
  <Icon className={className} size={16} {...props} />
);

export const IconTable = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Table} {...props} />;
export const IconSync = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={RefreshCw} {...props} />;
export const IconFunnel = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Filter} {...props} />;
export const IconArrowsDownUp = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ArrowUpDown} {...props} />;
export const IconRectanglesTwoLinesFour = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={LayoutGrid} {...props} />;
export const IconEyeOpenSlash = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={EyeOff} {...props} />;
export const IconBookmark = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Bookmark} {...props} />;
export const IconTextLinesThree = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={AlignLeft} {...props} />;
export const IconSelect = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={MousePointer2} {...props} />;
export const IconLink = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Link2} {...props} />;
export const IconUser = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={User} {...props} />;
export const IconPlus = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Plus} {...props} />;
export const IconCalendarBlank = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Calendar} {...props} />;
export const IconChevronLeft = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ChevronLeft} {...props} />;
export const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ChevronRight} {...props} />;
export const IconArticle = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={FileText} {...props} />;
export const IconArrowsOutSimple = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Maximize2} {...props} />;
export const IconDotsThreeVertical = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={MoreVertical} {...props} />;
export const IconHash = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Hash} {...props} />;
export const IconList = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={List} {...props} />;
export const IconCheckSquare = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={CheckSquare} {...props} />;
export const IconSigma = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Sigma} {...props} />;
export const IconArrowUpRight = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ArrowUpRight} {...props} />;
export const IconTag = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={Tag} {...props} />;
export const IconArrowRight = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ArrowRight} {...props} />;
export const IconArrowLeft = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ArrowLeft} {...props} />;
export const IconListChecks = (props: React.SVGProps<SVGSVGElement>) => <IconWrapper Icon={ListChecks} {...props} />;

// --- Custom SVGs ---

export const ListMarker = () => (
  <svg className="size-[16.8px] shrink-0" viewBox="0 0 17 17" fill="none">
    <circle cx="8.4" cy="8.4" r="2.1" fill="var(--muted-foreground)" />
  </svg>
);
