import svgPaths from "./svg-6k8ku8m2os";

function IconArticle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-article">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-article">
          <path d={svgPaths.p23a92180} fill="var(--fill-0, #0E9DCD)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Icon">
      <IconArticle />
    </div>
  );
}

function Title() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-[6px] pr-[8px] py-[4px] relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roobert_PRO:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222428] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Document</p>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-arrows-out-simple">
          <path d="M10 2L14 2L14 6" id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
          <path d="M9.33333 6.66667L14 2" id="stroke-1_2" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d="M6.66667 9.33333L2 14" id="stroke-1_3" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d="M6 14L2 14L2 10" id="stroke-1_4" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
        </g>
      </svg>
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
      <Tooltip />
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

function Tooltip1() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-1/2 shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)] top-[-40px] translate-x-[-50%] w-[91px]" data-name="Tooltip">
      <Content1 />
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
      <Tooltip1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Focus />
      <Overflow />
    </div>
  );
}

function LocalFormatPills() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center left-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_#e0e2e8] top-0" data-name="LOCAL- Format pills">
      <Icon />
      <Title1 />
      <Actions />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <LocalFormatPills />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group2 />
    </div>
  );
}

function FormatHeaderLeft() {
  return <div className="h-[32px] shrink-0 w-[152px]" data-name="Format/Header/Left" />;
}

function ContainerHeader() {
  return (
    <div className="content-stretch flex gap-[66.56px] items-center relative shrink-0 w-full" data-name="Container Header">
      <FormatHeaderLeft />
    </div>
  );
}

function BlockTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Title">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[2.625px] pt-[20px] px-[2.625px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#656b81] text-[20.999px] tracking-[0.0022px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[27.561px]">Untitled doc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Empty state">
      <BlockTitle />
    </div>
  );
}

function ParagraphPrompt() {
  return (
    <div className="relative shrink-0 w-full" data-name="paragraph-prompt">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#656b81] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Press ‘/’ for options or start writing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconArticle1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-article">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-article">
          <path d={svgPaths.p3ba60e80} id="stroke-1" stroke="var(--stroke-0, #656B81)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TemplateListItem() {
  return (
    <div className="relative rounded-[2.625px] shrink-0 w-full" data-name="Template list item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <IconArticle1 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#656b81] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Retrospective Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconArticle2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-article">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-article">
          <path d={svgPaths.p3ba60e80} id="stroke-1" stroke="var(--stroke-0, #656B81)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TemplateListItem1() {
  return (
    <div className="relative rounded-[2.625px] shrink-0 w-full" data-name="Template list item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <IconArticle2 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#656b81] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Product Brief</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconArticle3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-article">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-article">
          <path d={svgPaths.p3ba60e80} id="stroke-1" stroke="var(--stroke-0, #656B81)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TemplateListItem2() {
  return (
    <div className="relative rounded-[2.625px] shrink-0 w-full" data-name="Template list item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <IconArticle3 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#656b81] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Research Synthesis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconArticle4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-article">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-article">
          <path d={svgPaths.p3ba60e80} id="stroke-1" stroke="var(--stroke-0, #656B81)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TemplateListItem3() {
  return (
    <div className="relative rounded-[2.625px] shrink-0 w-full" data-name="Template list item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <IconArticle4 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#656b81] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Meeting Notes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateList() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start pb-0 pt-[64px] px-0 relative shrink-0 w-full" data-name="template-list">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#656b81] text-[10.5px] text-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[13.124px] whitespace-pre">Choose a starting template</p>
      </div>
      <TemplateListItem />
      <TemplateListItem1 />
      <TemplateListItem2 />
      <TemplateListItem3 />
    </div>
  );
}

function DocsContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[436.8px]" data-name="Docs content">
      <EmptyState />
      <ParagraphPrompt />
      <TemplateList />
    </div>
  );
}

function Doc() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[690px] items-center left-1/2 overflow-clip p-[11.249px] rounded-[7.953px] shadow-[0px_0px_0px_0.937px_#e0e2e8] top-[calc(50%+20px)] translate-x-[-50%] translate-y-[-50%] w-[491px]" data-name="Doc">
      <ContainerHeader />
      <DocsContent />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <Doc />
    </div>
  );
}