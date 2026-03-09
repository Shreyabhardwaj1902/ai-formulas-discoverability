import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface ColorOption {
  name: string;
  value: string;
  isNoFill?: boolean;
}

interface ColorPickerDropdownProps {
  colors: ColorOption[];
  value: string;
  onChange: (value: string) => void;
  variant?: "fill" | "stroke";
  label?: string;
  allowNoFill?: boolean;
}

export function ColorPickerDropdown({
  colors,
  value,
  onChange,
  variant = "fill",
  label,
  allowNoFill = false,
}: ColorPickerDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 transition-colors hover:bg-[rgba(0,0,0,0.04)] px-2 gap-1"
          aria-label={label || "Pick a color"}
        >
          <div className="relative shrink-0 size-[20px]">
            {variant === "fill" ? (
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="9" fill={value} stroke="#D1D5DB" strokeWidth="1" />
              </svg>
            ) : (
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="8" fill="none" stroke={value} strokeWidth="2" />
              </svg>
            )}
          </div>
          <ChevronDown size={12} className="text-[var(--foreground)]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="p-2 min-w-0 w-auto bg-white"
      >
        <div className="flex flex-wrap gap-2 max-w-[140px]">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => {
                onChange(color.value);
                setOpen(false);
              }}
              className="relative shrink-0 size-[24px] hover:scale-110 transition-transform rounded-full"
              title={color.name}
            >
              {variant === "fill" ? (
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill={color.value}
                    stroke="#D1D5DB"
                    strokeWidth="1"
                  />
                  {value === color.value && (
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="none"
                      stroke="var(--foreground)"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              ) : (
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke={color.value}
                    strokeWidth={value === color.value ? "3" : "2"}
                  />
                </svg>
              )}
            </button>
          ))}
          {allowNoFill && (
            <button
              onClick={() => {
                onChange("transparent");
                setOpen(false);
              }}
              className="relative shrink-0 size-[24px] hover:scale-110 transition-transform rounded-full flex items-center justify-center"
              title="No Fill"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="white"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                />
                {value === "transparent" && (
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="none"
                    stroke="var(--foreground)"
                    strokeWidth="2"
                  />
                )}
              </svg>
              <X size={14} className="absolute text-[var(--foreground)]" strokeWidth={2} />
            </button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}