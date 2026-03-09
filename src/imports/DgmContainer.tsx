import svgPaths from "./svg-h1rqmtnesw";

function FormatIcon16Px() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Format icon 16px">
          <path d={svgPaths.p19a89c00} id="stroke-1" stroke="var(--stroke-0, #DA792B)" strokeWidth="1.5" />
          <path d={svgPaths.p165cf600} id="stroke-1_2" stroke="var(--stroke-0, #DA792B)" strokeWidth="1.5" />
          <rect height="4" id="stroke-1_3" rx="1.5" stroke="var(--stroke-0, #DA792B)" strokeWidth="1.5" width="4" x="2" y="6" />
          <rect height="4" id="stroke-1_4" rx="1.5" stroke="var(--stroke-0, #DA792B)" strokeWidth="1.5" width="4" x="9.33333" y="2" />
          <rect height="4" id="stroke-1_5" rx="1.5" stroke="var(--stroke-0, #DA792B)" strokeWidth="1.5" width="4" x="9.33333" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Icon">
      <FormatIcon16Px />
    </div>
  );
}

function Title() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-[6px] pr-[8px] py-[4px] relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roobert_PRO:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222428] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Diagram</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <Title />
    </div>
  );
}

function IconArrowsOutSimple() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-arrows-out-simple">
      <div className="absolute bottom-[-35.94%] left-0 right-[-35.94%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="icon-arrows-out-simple">
            <path d="M15 3L21 3L21 9" id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
            <path d="M14 10L21 3" id="stroke-1_2" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
            <path d="M10 14L3 21" id="stroke-1_3" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
            <path d="M9 21L3 21L3 15" id="stroke-1_4" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HotkeyContainer() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Hotkey Container">
      <div className="h-[22px] shrink-0 w-[4px]" data-name="Spacer (4px)" />
    </div>
  );
}

function TooltipWrapper() {
  return (
    <div className="bg-[#222428] box-border content-stretch flex items-center justify-center max-w-[280px] min-h-[32px] overflow-clip pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="tooltip-wrapper">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#fafafc] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Focus
      </p>
      <HotkeyContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
      <TooltipWrapper />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "6", "--transform-inner-height": "8" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[8px] relative w-[6px]" data-name="Tip">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
                <path d="M0 4L6 0V8L0 4Z" fill="var(--fill-0, #222428)" id="Tip" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-1/2 shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)] top-[-40px] translate-x-[-50%] w-[91px]" data-name="Tooltip">
      <Content />
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Tooltip">
      <Tooltip />
    </div>
  );
}

function Focus() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="focus">
      <IconArrowsOutSimple />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[-0.5px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[32px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(224, 226, 232, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 854" stroke="var(--stroke-0, #E0E2E8)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Tooltip1 />
    </div>
  );
}

function IconDotsThreeVertical() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-dots-three-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-dots-three-vertical">
          <g id="shape-1">
            <path d={svgPaths.p1a5c3400} fill="var(--fill-0, #555A6A)" />
            <path d={svgPaths.p84b6380} fill="var(--fill-0, #555A6A)" />
            <path d={svgPaths.p2f43b000} fill="var(--fill-0, #555A6A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HotkeyContainer1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Hotkey Container">
      <div className="h-[22px] shrink-0 w-[4px]" data-name="Spacer (4px)" />
    </div>
  );
}

function TooltipWrapper1() {
  return (
    <div className="bg-[#222428] box-border content-stretch flex items-center justify-center max-w-[280px] min-h-[32px] overflow-clip pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="tooltip-wrapper">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#fafafc] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        More
      </p>
      <HotkeyContainer1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
      <TooltipWrapper1 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "6", "--transform-inner-height": "8" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[8px] relative w-[6px]" data-name="Tip">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
                <path d="M0 4L6 0V8L0 4Z" fill="var(--fill-0, #222428)" id="Tip" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tooltip2() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-1/2 shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)] top-[-40px] translate-x-[-50%] w-[91px]" data-name="Tooltip">
      <Content1 />
    </div>
  );
}

function Tooltip3() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Tooltip">
      <Tooltip2 />
    </div>
  );
}

function Overflow() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-0 relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="overflow">
      <IconDotsThreeVertical />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[-0.5px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[32px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(224, 226, 232, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 854" stroke="var(--stroke-0, #E0E2E8)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Tooltip3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Overflow />
    </div>
  );
}

function FormatPill() {
  return (
    <div className="bg-white box-border content-stretch flex items-center overflow-clip relative rounded-[8px] shadow-[0px_0px_0px_1px_#e0e2e8] shrink-0" data-name="Format-Pill">
      <Icon />
      <Title1 />
      <Focus />
      <Actions />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="empty state">
      <div className="flex flex-col font-['Noto_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#656b81] text-[14px] text-nowrap">
        <p className="leading-none whitespace-pre">Start your diagram: drag shapes or</p>
      </div>
    </div>
  );
}

function IconSparks() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-sparks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-sparks">
          <path d={svgPaths.p72aff80} fill="var(--fill-0, #8167E5)" id="shape-1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] leading-none min-w-[128px] not-italic relative shrink-0 text-[#222428] text-[14px] text-center w-full">Create with AI</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[32px] relative rounded-[8px] shrink-0 w-[198px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#e0e2e8] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <IconSparks />
      <Frame1 />
    </div>
  );
}

function IconCurveSquareCircleArrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-curve-square-circle-arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-curve-square-circle-arrow">
          <g id="shape-1"></g>
          <path d={svgPaths.p284ea980} id="stroke-1" stroke="var(--stroke-0, #DA792B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 10V10.0001" id="stroke-1_2" stroke="var(--stroke-0, #DA792B)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] leading-none min-w-[128px] not-italic relative shrink-0 text-[#222428] text-[14px] text-center w-full">Add shapes</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[32px] relative rounded-[8px] shrink-0 w-[198px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#e0e2e8] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <IconCurveSquareCircleArrow />
      <Frame2 />
    </div>
  );
}

function IconLayout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-layout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-layout">
          <path d={svgPaths.p269a700} id="stroke-1" stroke="var(--stroke-0, #DA792B)" strokeWidth="2" />
          <path d="M3 9L21 9" id="stroke-1_2" stroke="var(--stroke-0, #DA792B)" strokeWidth="2" />
          <path d={svgPaths.p154fac80} id="stroke-1_3" stroke="var(--stroke-0, #DA792B)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] leading-none min-w-[128px] not-italic relative shrink-0 text-[#222428] text-[14px] text-center w-full">Start with a template</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[32px] relative rounded-[8px] shrink-0 w-[198px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#e0e2e8] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <IconLayout />
      <Frame3 />
    </div>
  );
}

function DiagrammingTiles() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Diagramming tiles">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function DiagrammingEmptyState() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-[calc(50%+0.1px)] translate-x-[-50%] translate-y-[-50%]" data-name="Diagramming empty state">
      <EmptyState />
      <DiagrammingTiles />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[419px] left-1/2 rounded-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[770px]">
      <div className="h-[419px] overflow-clip relative rounded-[inherit] w-[770px]">
        <DiagrammingEmptyState />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e2e8] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Templates() {
  return (
    <div className="bg-white h-[451px] relative rounded-[8px] shrink-0 w-[802px]" data-name="templates">
      <div className="h-[451px] overflow-clip relative rounded-[inherit] w-[802px]">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e2e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function DgmContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="dgm_container">
      <FormatPill />
      <Templates />
    </div>
  );
}