import { ReactNode } from "react";

// Base Miro-style toolbar container
export function WidgetToolbar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white relative rounded-[8px] h-[48px]">
      <div
        aria-hidden="true"
        className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(34,36,40,0.08)]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center px-[4px] py-0 relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}

// Toolbar section for grouping controls
export function ToolbarSection({ children }: { children: ReactNode }) {
  return (
    <div className="content-stretch flex gap-[2px] h-[48px] items-center relative shrink-0">
      {children}
    </div>
  );
}

// Divider between sections
export function ToolbarDivider() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0">
      <div className="h-full relative shrink-0 w-px">
        <div
          aria-hidden="true"
          className="absolute border border-[#e9eaef] border-solid inset-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

// Toolbar button wrapper
export function ToolbarButtonSlot({ children }: { children: ReactNode }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
      {children}
    </div>
  );
}

// Icon button for toolbar
interface ToolbarIconButtonProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  title?: string;
}

export function ToolbarIconButton({ children, active, onClick, title }: ToolbarIconButtonProps) {
  return (
    <button
      className={`basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 transition-colors ${
        active
          ? "bg-[rgba(5,0,56,0.08)] hover:bg-[rgba(5,0,56,0.12)]"
          : "hover:bg-[rgba(0,0,0,0.04)]"
      }`}
      onClick={onClick}
      title={title}
    >
      <div className="relative shrink-0 size-[24px] flex items-center justify-center">
        {children}
      </div>
    </button>
  );
}

// Color picker section
export function ColorPickerSection({ children }: { children: ReactNode }) {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-0 relative shrink-0">
      {children}
    </div>
  );
}

// Color circle button
interface ColorCircleProps {
  color: string;
  active?: boolean;
  onClick?: () => void;
  title?: string;
}

export function ColorCircle({ color, active, onClick, title }: ColorCircleProps) {
  return (
    <button
      className="relative shrink-0 size-[24px] hover:scale-110 transition-transform"
      onClick={onClick}
      title={title}
    >
      <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute inset-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 22 22"
          >
            <circle
              cx="11"
              cy="11"
              r="10"
              stroke={color}
              strokeWidth={active ? "3" : "2"}
              fill="none"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

// Color input wrapper for custom color picker
interface ColorInputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
}

export function ColorInput({ type = "color", value, onChange, title }: ColorInputProps) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <input
        type={type}
        value={value}
        onChange={onChange}
        title={title}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none">
        <div className="absolute inset-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 22 22"
          >
            <circle
              cx="11"
              cy="11"
              r="10"
              stroke={value}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}