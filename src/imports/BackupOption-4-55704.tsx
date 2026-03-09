import svgPaths from "./svg-3k7ydn3xdh";
import imgMdscCanvasBackground from "figma:asset/0bf3088851693161f8463ad5c70f15940f4ab3b1.png";
import imgImage3 from "figma:asset/eab664756082e923c22767f8e39c4a785bee9413.png";
import imgAvatar from "figma:asset/d88f4f1ea8e590d04143cc0cef0c452360c32504.png";
import imgAvatar1 from "figma:asset/f2507869e658d91ea9fc48c7c0e8431399cd1c52.png";
import imgImage5 from "figma:asset/f99743f6bba5a2fa1507f51ba8e837badc72acd7.png";
import imgAvatar2 from "figma:asset/35af249cb9f6e3491a3e9412270231a090b01f3b.png";
import imgAvatar3 from "figma:asset/546be81b4416911a138342e9e966777b11fb8f14.png";
import imgAvatar4 from "figma:asset/55c798886cfea208940fc9ab192ef15484a5bda6.png";
import imgAvatar5 from "figma:asset/a3e425e6f414a0bb93988cb3462366cd138c57ab.png";
import { imgImage4 } from "./svg-z5698";

function MdscCanvasBackground() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[982px] overflow-clip right-[107px] top-1/2 translate-y-[-50%] w-[1512px]" data-name="mdsc-canvas-background">
      <div aria-hidden="true" className="absolute bg-repeat bg-size-[21px_21px] bg-top-left inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url('${imgMdscCanvasBackground}')` }} />
    </div>
  );
}

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
    <div className="absolute bg-white box-border content-stretch flex items-center left-[80px] overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_#e0e2e8] top-[120px]" data-name="LOCAL- Format pills">
      <Icon />
      <Title1 />
      <Actions />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[80px] top-[120px]">
      <LocalFormatPills />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[80px] top-[120px]">
      <Group6 />
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
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center pb-[2.8px] pt-[14px] px-[2.8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1a1b1e] text-[20.999px] tracking-[0.0022px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[27.561px]">User interview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockHeading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Heading 4">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[2.8px] pt-[14px] px-[2.8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1a1b1e] text-[13.124px] tracking-[0.0022px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[17.062px]">Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockParagraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center justify-center p-[2.8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">
              Project Name: EcoDrive Initiative
              <br aria-hidden="true" />
              Team: Research and Development
              <br aria-hidden="true" />
              Researcher: Alex Johnson
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockHeading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Heading 5">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[2.8px] pt-[14px] px-[2.8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1a1b1e] text-[13.124px] tracking-[0.0022px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[17.062px]">Research Goals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.39995" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Purpose: This study is essential to understand user behaviors and preferences regarding eco-friendly driving solutions. It aims to identify the motivations behind adopting sustainable practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker1() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.40005" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker1 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">{`Research Questions: What factors influence users' decisions to adopt eco-driving habits? What barriers do they face?`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker2() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.3999" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker2 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Decision Impact: This research will guide the development of targeted marketing strategies and product features that align with user needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BlockHeading1 />
      <BlockBulletedList />
      <BlockBulletedList1 />
      <BlockBulletedList2 />
    </div>
  );
}

function BlockHeading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Heading 5">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[2.8px] pt-[14px] px-[2.8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1a1b1e] text-[13.124px] tracking-[0.0022px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[17.062px]">Research Approach</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker3() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.39999" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker3 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Research Design: A mixed-methods approach will be utilized, combining qualitative interviews and quantitative surveys to gain comprehensive insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker4() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.40009" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker4 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Data Collection: We will use online surveys and in-depth interviews to gather diverse perspectives, ensuring a robust understanding of user experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker5() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.39994" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker5 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Sampling: The target population includes environmentally conscious drivers aged 18-45, with a sample size of 200 participants selected through stratified sampling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMarker6() {
  return (
    <div className="relative shrink-0 size-[16.8px]" data-name=".List marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id=".List marker">
          <circle cx="8.40001" cy="8.40004" fill="var(--fill-0, #656B81)" id="Ellipse 1" r="2.1" />
        </g>
      </svg>
    </div>
  );
}

function BlockBulletedList6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Bulleted list">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.4px] items-start p-[2.8px] relative w-full">
          <ListMarker6 />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-[16.8px] min-w-px not-italic relative shrink-0 text-[#1a1b1e] text-[9.187px] tracking-[0.0022px]">
            <p className="leading-[14.437px]">Data Analysis: The data will be analyzed using thematic analysis for qualitative data and statistical methods for quantitative data to answer the research questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockHeading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block / Heading 6">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[8.4px] pt-[14px] px-[2.8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1a1b1e] text-[13.124px] tracking-[0.0022px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[17.062px]">Project Timeline</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCalendarBlank() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="icon-calendar-blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-calendar-blank">
          <g id="shape-1"></g>
          <path d={svgPaths.p3f2b1630} id="stroke-1" stroke="var(--stroke-0, #1A1B1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.41421" strokeWidth="1.05" />
          <path d="M5.6 5.13354V5.13364" id="stroke-1_2" stroke="var(--stroke-0, #1A1B1E)" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative rounded-[5.6px] shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[2.8px] py-0 relative size-full">
          <IconCalendarBlank />
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[22.4px]" data-name="IconButton">
      <Button />
    </div>
  );
}

function IconChevronLeft() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="icon-chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-chevron-left">
          <path d={svgPaths.p144a100} id="stroke-1" stroke="var(--stroke-0, #1A1B1E)" strokeLinecap="round" strokeWidth="1.05" />
          <g id="shape-1"></g>
          <path d="M4.19998 5.60009V5.60019" id="stroke-1_2" stroke="var(--stroke-0, #1A1B1E)" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative rounded-[5.6px] shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[2.8px] py-0 relative size-full">
          <IconChevronLeft />
        </div>
      </div>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[22.4px]" data-name="IconButton">
      <Button1 />
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="icon-chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-chevron-right">
          <path d={svgPaths.p17521b00} id="stroke-1" stroke="var(--stroke-0, #1A1B1E)" strokeLinecap="round" strokeWidth="1.05" />
          <g id="shape-1"></g>
          <path d="M7.46669 5.60009V5.60019" id="stroke-1_2" stroke="var(--stroke-0, #1A1B1E)" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-gray-100 grow h-full min-h-px min-w-px relative rounded-[5.6px] shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[2.8px] py-0 relative size-full">
          <IconChevronRight />
        </div>
      </div>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[22.4px]" data-name="IconButton">
      <Button2 />
    </div>
  );
}

function DateControls() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="date controls">
      <IconButton />
      <IconButton1 />
      <IconButton2 />
    </div>
  );
}

function Month() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.6px] h-[14px] items-start justify-center left-[610.4px] top-0 w-[67.2px]" data-name="month">
      <p className="font-['Roobert_PRO:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre">June: Data Analysis Phase</p>
    </div>
  );
}

function Month1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.6px] h-[14px] items-start justify-center left-[336px] top-0 w-[67.2px]" data-name="month">
      <p className="font-['Roobert_PRO:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre">May: Data Collection Phase</p>
    </div>
  );
}

function Month2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.6px] h-[14px] items-start justify-center left-[16.8px] top-0 w-[67.2px]" data-name="month">
      <p className="font-['Roobert_PRO:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre">April: Research Design Finalization</p>
    </div>
  );
}

function Months() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="months">
      <Month />
      <Month1 />
      <Month2 />
    </div>
  );
}

function Day() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1: Initial Survey Distribution
      </p>
    </div>
  );
}

function Day1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        8: First Round of Interviews
      </p>
    </div>
  );
}

function Day2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        15: Data Collection Completion
      </p>
    </div>
  );
}

function Day3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22: Preliminary Findings Review
      </p>
    </div>
  );
}

function Day4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        29: Final Report Drafting
      </p>
    </div>
  );
}

function Day5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6: Final Report Submission
      </p>
    </div>
  );
}

function Day6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        13: Presentation of Findings
      </p>
    </div>
  );
}

function Day7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20: Stakeholder Feedback Session
      </p>
    </div>
  );
}

function Day8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        27: Implementation Planning
      </p>
    </div>
  );
}

function Day9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3: Follow-up Surveys
      </p>
    </div>
  );
}

function Day10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.6px] grow h-[14px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="day">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a1b1e] text-[9.8px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        10: Final Review Meeting
      </p>
    </div>
  );
}

function Days() {
  return (
    <div className="relative shrink-0 w-full" data-name="days">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[16.8px] py-0 relative w-full">
          <Day />
          <Day1 />
          <Day2 />
          <Day3 />
          <Day4 />
          <Day5 />
          <Day6 />
          <Day7 />
          <Day8 />
          <Day9 />
          <Day10 />
        </div>
      </div>
    </div>
  );
}

function Dates() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[5.6px] relative shrink-0 w-[622.3px]" data-name="dates">
      <Months />
      <Days />
    </div>
  );
}

function DateBar() {
  return (
    <div className="bg-gray-100 relative shrink-0 w-full" data-name="date bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative w-full">
          <DateControls />
          <Dates />
        </div>
      </div>
    </div>
  );
}

function BackgroundColumns() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="background columns">
      <div className="bg-gray-100 h-full shrink-0 w-[16.8px]" data-name="margin-left" />
      <div className="bg-white h-full shrink-0 w-[67.2px]" data-name="column" />
      <div className="h-full relative shrink-0 w-[67.2px]" data-name="column">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 177">
          <path d="M0 0H67.2V176.406H0V0Z" fill="var(--fill-0, #F3F4F6)" id="column" />
        </svg>
      </div>
      <div className="bg-white h-full shrink-0 w-[67.2px]" data-name="column" />
      <div className="bg-gray-100 h-full shrink-0 w-[67.2px]" data-name="column" />
      <div className="bg-white h-full shrink-0 w-[67.2px]" data-name="column" />
      <div className="h-full relative shrink-0 w-[67.2px]" data-name="column">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 177">
          <path d="M0 0H67.2V176.406H0V0Z" fill="var(--fill-0, #F3F4F6)" id="column" />
        </svg>
      </div>
      <div className="bg-white h-full shrink-0 w-[67.2px]" data-name="column" />
      <div className="h-full relative shrink-0 w-[67.2px]" data-name="column">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 177">
          <path d="M0 0H67.2V176.406H0V0Z" fill="var(--fill-0, #F3F4F6)" id="column" />
        </svg>
      </div>
      <div className="basis-0 bg-white grow h-full min-h-px min-w-px shrink-0" data-name="margin-right" />
    </div>
  );
}

function Group() {
  return (
    <div className="basis-0 bg-[#d1d4db] content-stretch flex gap-[0.7px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="group">
      <BackgroundColumns />
    </div>
  );
}

function Groups() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[0.7px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="groups">
      <Group />
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1b1e] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Focus Groups
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title2 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar() {
  return (
    <div className="basis-0 bg-[#cefddd] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#66d085] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content2 />
    </div>
  );
}

function Record() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[36.06%] px-[0.7px] py-0 right-[31.89%] top-[106.4px]" data-name="record">
      <TimelineBar />
    </div>
  );
}

function Title3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#600000] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preparation
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title3 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar1() {
  return (
    <div className="basis-0 bg-[#ffcaca] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#d76060] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content3 />
    </div>
  );
}

function Record1() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[4.01%] px-[0.7px] py-0 right-[64.11%] top-[39.2px]" data-name="record">
      <TimelineBar1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#600000] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Participant Recruitment
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title4 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar2() {
  return (
    <div className="basis-0 bg-[#ffcaca] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#d76060] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content4 />
    </div>
  );
}

function Record2() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[20.2%] px-[0.7px] py-0 right-[63.94%] top-[72.8px]" data-name="record">
      <TimelineBar2 />
    </div>
  );
}

function Title5() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#403300] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Integrating regenerative braking systems for enhanced efficiency and performance.
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title5 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar3() {
  return (
    <div className="basis-0 bg-[#fff3a2] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#cfb326] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content5 />
    </div>
  );
}

function Record3() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[52.09%] px-[0.7px] py-0 right-[-0.17%] top-[207.2px]" data-name="record">
      <TimelineBar3 />
    </div>
  );
}

function Title6() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#005b13] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Optimizing vehicle aerodynamics to minimize air resistance and maximize stability.
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title6 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar4() {
  return (
    <div className="basis-0 bg-[#cefddd] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#66d085] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content6 />
    </div>
  );
}

function Record4() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[68.11%] px-[0.7px] py-0 right-[16.19%] top-[240.8px]" data-name="record">
      <TimelineBar4 />
    </div>
  );
}

function Title7() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#005b13] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enhancing vehicle aerodynamics to lower drag and boost downforce.
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title7 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar5() {
  return (
    <div className="basis-0 bg-[#cefddd] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#66d085] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content7 />
    </div>
  );
}

function Record5() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[4.01%] px-[0.7px] py-0 right-[47.75%] top-[274.4px]" data-name="record">
      <TimelineBar5 />
    </div>
  );
}

function Title8() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#403300] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Improving the car's aerodynamic profile to decrease drag and enhance grip.`}</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title8 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar6() {
  return (
    <div className="basis-0 bg-[#fff3a2] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#cfb326] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content8 />
    </div>
  );
}

function Record6() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[20.03%] px-[0.7px] py-0 right-[47.91%] top-[308px]" data-name="record">
      <TimelineBar6 />
    </div>
  );
}

function Title9() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[5.6px] grow items-center min-h-px min-w-px pb-[0.7px] pt-0 px-0 relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.3] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1b1e] text-[9.187px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Final Report
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5.6px] items-center px-[8.4px] py-0 relative size-full">
          <Title9 />
        </div>
      </div>
    </div>
  );
}

function TimelineBar7() {
  return (
    <div className="basis-0 bg-[#fff3a2] box-border content-stretch flex grow h-[28.001px] items-center justify-between min-h-px min-w-px px-0 py-[5.6px] relative rounded-[5.6px] shrink-0" data-name="timeline-bar">
      <div aria-hidden="true" className="absolute border-[#cfb326] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
      <Content9 />
    </div>
  );
}

function Record7() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-[68.28%] px-[0.7px] py-0 right-[0.83%] top-[140px]" data-name="record">
      <TimelineBar7 />
    </div>
  );
}

function Timeline() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative self-stretch shrink-0" data-name="timeline">
      <Groups />
      <Record />
      <Record1 />
      <Record2 />
      <Record3 />
      <Record4 />
      <Record5 />
      <Record6 />
      <Record7 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[0.7px] items-start overflow-clip relative shrink-0 w-full" data-name="content">
      <Timeline />
    </div>
  );
}

function FormatContents() {
  return (
    <div className="bg-[#d1d4db] relative rounded-[5.6px] shrink-0 w-full" data-name=".Format contents">
      <div className="content-stretch flex flex-col gap-[0.7px] items-start overflow-clip relative rounded-[inherit] w-full">
        <DateBar />
        <Content10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d4db] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BlockHeading3 />
      <BlockBulletedList3 />
      <BlockBulletedList4 />
      <BlockBulletedList5 />
      <BlockBulletedList6 />
      <BlockHeading2 />
      <FormatContents />
    </div>
  );
}

function DocsContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[436.8px]" data-name="Docs content">
      <BlockTitle />
      <BlockHeading />
      <BlockParagraph />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Doc() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[690px] items-center left-[calc(50%-484px)] overflow-clip p-[11.249px] rounded-[7.953px] shadow-[0px_0px_0px_0.937px_#e0e2e8] top-[calc(50%+14px)] translate-x-[-50%] translate-y-[-50%] w-[491px]" data-name="Doc">
      <ContainerHeader />
      <DocsContent />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[80px] top-[120px]">
      <Group1 />
      <Doc />
    </div>
  );
}

function SyncArrows() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="sync arrows">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sync arrows">
          <path d={svgPaths.p9fed71b} id="Ellipse 452" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
          <path d={svgPaths.p1f2a87c0} id="Ellipse 453" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative size-full">
          <SyncArrows />
        </div>
      </div>
    </div>
  );
}

function SyncButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="sync button">
      <Button3 />
    </div>
  );
}

function FormatIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format/Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-table">
          <path d={svgPaths.p2963c40} fill="var(--fill-0, #555A6A)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LayoutButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Layout/Button">
      <FormatIcon />
    </div>
  );
}

function ModifierIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Modifier/Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-funnel">
          <path d={svgPaths.pa85d600} fill="var(--stroke-0, #555A6A)" id="stroke-1" />
        </g>
      </svg>
    </div>
  );
}

function ModifierButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Modifier/Button">
      <ModifierIcon />
    </div>
  );
}

function ModifierIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Modifier/Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-arrows-down-up">
          <path d={svgPaths.p6724700} id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinecap="square" strokeWidth="1.5" />
          <path d={svgPaths.p67f3ac0} id="stroke-1_2" stroke="var(--stroke-0, #555A6A)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="1.5" />
          <path d="M11.3333 14L11.3333 2.66667" id="stroke-1_3" stroke="var(--stroke-0, #555A6A)" strokeLinecap="square" strokeWidth="1.5" />
          <path d={svgPaths.p298a0a80} id="stroke-1_4" stroke="var(--stroke-0, #555A6A)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ModifierButton1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Modifier/Button">
      <ModifierIcon1 />
    </div>
  );
}

function ModifierIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Modifier/Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-rectangles-two-lines-four">
          <rect height="4" id="stroke-1" rx="1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" width="4" x="2.66667" y="9.33333" />
          <rect height="4" id="stroke-1_2" rx="1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" width="4" x="2.66667" y="2.66667" />
          <path d="M8.66667 3.33333L14 3.33333" id="stroke-1_3" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d="M8.66667 6L12.6667 6" id="stroke-1_4" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d="M8.66667 10L14 10" id="stroke-1_5" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d={svgPaths.p1f566e80} id="stroke-1_6" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ModifierButton2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Modifier/Button">
      <ModifierIcon2 />
    </div>
  );
}

function ModifierIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Modifier/Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-eye-open-slash">
          <path d={svgPaths.p20bab300} id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a59600} id="stroke-1_2" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d={svgPaths.p18059e80} fill="var(--stroke-0, #555A6A)" id="stroke-1_3" />
        </g>
      </svg>
    </div>
  );
}

function ModifierButton3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Modifier/Button">
      <ModifierIcon3 />
    </div>
  );
}

function BezelHeaderOct() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0" data-name="Bezel header/Oct">
      <SyncButton />
      <LayoutButton />
      <ModifierButton />
      <ModifierButton1 />
      <ModifierButton2 />
      <ModifierButton3 />
    </div>
  );
}

function IconBookmark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-bookmark">
          <path d={svgPaths.p10dfdb80} id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FieldType() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Field type">
      <IconBookmark />
      <div className="basis-0 flex flex-col font-['Noto_Sans:SemiBold',sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#656b81] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">{`User Feedback `}</p>
      </div>
    </div>
  );
}

function FieldHeaderCell() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Field header/Cell">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[44px] items-center justify-center p-[8px] relative w-full">
          <FieldType />
        </div>
      </div>
    </div>
  );
}

function FieldHeaderPrimaryCell() {
  return (
    <div className="bg-white box-border content-stretch flex h-[44px] items-center pl-[44px] pr-0 py-0 relative shrink-0 w-[220px]" data-name="Field header/Primary Cell">
      <FieldHeaderCell />
    </div>
  );
}

function IconTextLinesThree() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-text-lines-three">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-text-lines-three">
          <path d={svgPaths.p107caf00} id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FieldType1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Field type">
      <IconTextLinesThree />
      <div className="basis-0 flex flex-col font-['Noto_Sans:SemiBold',sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#656b81] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">This section highlights the challenges users face while navigating the application.</p>
      </div>
    </div>
  );
}

function FieldHeaderCell1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[44px] items-center justify-center overflow-clip p-[8px] relative shrink-0 w-[200px]" data-name="Field header/Cell">
      <FieldType1 />
    </div>
  );
}

function IconSelect() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-select">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-select">
          <path d={svgPaths.p7a62b80} id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
          <circle cx="8" cy="8" id="stroke-1_2" r="6" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FieldType2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Field type">
      <IconSelect />
      <div className="basis-0 flex flex-col font-['Noto_Sans:SemiBold',sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#656b81] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">Current Issues</p>
      </div>
    </div>
  );
}

function FieldHeaderCell2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[44px] items-center justify-center overflow-clip p-[8px] relative shrink-0 w-[140px]" data-name="Field header/Cell">
      <FieldType2 />
    </div>
  );
}

function IconLink() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-link">
          <path d={svgPaths.pda2f180} id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d="M6 10L10 6" id="stroke-1_2" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FieldType3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Field type">
      <IconLink />
      <div className="flex flex-col font-['Noto_Sans:SemiBold',sans-serif] h-full justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#656b81] text-[14px] text-nowrap w-[90px]">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">Feedback Link</p>
      </div>
    </div>
  );
}

function FieldHeaderCell3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[44px] items-center justify-center overflow-clip p-[8px] relative shrink-0 w-[160px]" data-name="Field header/Cell">
      <FieldType3 />
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-user">
          <circle cx="8" cy="5" id="stroke-1" r="2.33333" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
          <path d={svgPaths.p3ab7db80} id="stroke-1_2" stroke="var(--stroke-0, #555A6A)" strokeLinejoin="bevel" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function FieldType4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[16px] items-center min-h-px min-w-px relative shrink-0" data-name="Field type">
      <IconUser />
      <div className="flex flex-col font-['Noto_Sans:SemiBold',sans-serif] h-full justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#656b81] text-[14px] text-nowrap w-[90px]">
        <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden">User Experience Researcher</p>
      </div>
    </div>
  );
}

function FieldHeaderCell4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[44px] items-center justify-center overflow-clip p-[8px] relative shrink-0 w-[140px]" data-name="Field header/Cell">
      <FieldType4 />
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-plus">
          <path d="M8 2V14M14 8L2 8" id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CreateNewField() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative shrink-0 w-[44px]" data-name="Create new field">
      <IconPlus />
    </div>
  );
}

function MockHeader() {
  return (
    <div className="content-stretch flex gap-px items-center overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="mock/header">
      <FieldHeaderPrimaryCell />
      <FieldHeaderCell1 />
      <FieldHeaderCell2 />
      <FieldHeaderCell3 />
      <FieldHeaderCell4 />
      <div className="flex flex-row items-center self-stretch">
        <CreateNewField />
      </div>
    </div>
  );
}

function RowHeader() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Insights from User Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText />
    </div>
  );
}

function RowRowHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader />
      </div>
      <Field />
    </div>
  );
}

function FieldText1() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Sends a notification to users when their feedback is reviewed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText1 />
    </div>
  );
}

function TagContainer() {
  return (
    <div className="bg-[#e7e7e7] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">Pending Review</p>
    </div>
  );
}

function MdsCanvasTag() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer />
    </div>
  );
}

function FieldSelectTags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag />
    </div>
  );
}

function FieldSelectDefault() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags />
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault />
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Apex Motorsports</p>
      </div>
    </div>
  );
}

function FieldUrlChip() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip />
        </div>
      </div>
    </div>
  );
}

function FieldUrl() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton />
    </div>
  );
}

function FieldPersonAvatars() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <div className="absolute inset-0 rounded-[24px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Sam Carter</p>
      </div>
    </div>
  );
}

function FieldPersonTag() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars />
      <Name1 />
    </div>
  );
}

function FieldPersonTagVariants() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag />
    </div>
  );
}

function FieldPersonFalseFalse() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Person/False/False">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldPersonTagVariants />
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldPersonFalseFalse />
    </div>
  );
}

function MockRow() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader />
      <Field1 />
      <Field2 />
      <FieldUrl />
      <Field3 />
    </div>
  );
}

function RowHeader1() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText2() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Overview of User Suggestions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText2 />
    </div>
  );
}

function RowRowHeader1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader1 />
      </div>
      <Field4 />
    </div>
  );
}

function FieldText3() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">When a user submits feedback, send a confirmation email to acknowledge receipt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText3 />
    </div>
  );
}

function TagContainer1() {
  return (
    <div className="bg-[#c6dcff] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#001d66] text-[14px] text-nowrap whitespace-pre">Under Review</p>
    </div>
  );
}

function MdsCanvasTag1() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer1 />
    </div>
  );
}

function FieldSelectTags1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag1 />
    </div>
  );
}

function FieldSelectDefault1() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags1 />
        </div>
      </div>
    </div>
  );
}

function Field6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault1 />
    </div>
  );
}

function Name2() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Velocity Racing Team</p>
      </div>
    </div>
  );
}

function FieldUrlChip1() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name2 />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton1() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip1 />
        </div>
      </div>
    </div>
  );
}

function FieldUrl1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton1 />
    </div>
  );
}

function FieldPersonAvatars1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <div className="absolute inset-0 rounded-[24px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatar1} />
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Alex Thompson</p>
      </div>
    </div>
  );
}

function FieldPersonTag1() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars1 />
      <Name3 />
    </div>
  );
}

function FieldPersonTagVariants1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag1 />
    </div>
  );
}

function FieldPersonFalseFalse1() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Person/False/False">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldPersonTagVariants1 />
        </div>
      </div>
    </div>
  );
}

function Field7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldPersonFalseFalse1 />
    </div>
  );
}

function MockRow1() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader1 />
      <Field5 />
      <Field6 />
      <FieldUrl1 />
      <Field7 />
    </div>
  );
}

function RowHeader2() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText4() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Summary of User Insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText4 />
    </div>
  );
}

function RowRowHeader2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader2 />
      </div>
      <Field8 />
    </div>
  );
}

function FieldText5() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Integrate with a feedback analysis tool to categorize user comments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText5 />
    </div>
  );
}

function TagContainer2() {
  return (
    <div className="bg-[#adf0c7] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#02400f] text-[14px] text-nowrap whitespace-pre">Feedback Type</p>
    </div>
  );
}

function MdsCanvasTag2() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer2 />
    </div>
  );
}

function FieldSelectTags2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag2 />
    </div>
  );
}

function FieldSelectDefault2() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags2 />
        </div>
      </div>
    </div>
  );
}

function Field10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault2 />
    </div>
  );
}

function Name4() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Thunderbolt Racing</p>
      </div>
    </div>
  );
}

function FieldUrlChip2() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name4 />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton2() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip2 />
        </div>
      </div>
    </div>
  );
}

function FieldUrl2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton2 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute contents inset-0" data-name="avatar">
      <div className="absolute bottom-[-30%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_1px] mask-size-[20px_20px] right-0 top-[-5%]" data-name="image 4" style={{ maskImage: `url('${imgImage4}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function FieldPersonAvatars2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <Avatar />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Jordan Blake</p>
      </div>
    </div>
  );
}

function FieldPersonTag2() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars2 />
      <Name5 />
    </div>
  );
}

function FieldPersonTagVariants2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag2 />
    </div>
  );
}

function FieldPersonFalseFalse2() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Person/False/False">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldPersonTagVariants2 />
        </div>
      </div>
    </div>
  );
}

function Field11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldPersonFalseFalse2 />
    </div>
  );
}

function MockRow2() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader2 />
      <Field9 />
      <Field10 />
      <FieldUrl2 />
      <Field11 />
    </div>
  );
}

function RowHeader3() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText6() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">User Experience Feedback Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText6 />
    </div>
  );
}

function RowRowHeader3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader3 />
      </div>
      <Field12 />
    </div>
  );
}

function FieldText7() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Please share your thoughts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText7 />
    </div>
  );
}

function TagContainer3() {
  return (
    <div className="bg-[#c6dcff] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#001d66] text-[14px] text-nowrap whitespace-pre">Under Review</p>
    </div>
  );
}

function MdsCanvasTag3() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer3 />
    </div>
  );
}

function FieldSelectTags3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag3 />
    </div>
  );
}

function FieldSelectDefault3() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags3 />
        </div>
      </div>
    </div>
  );
}

function Field14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault3 />
    </div>
  );
}

function Name6() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Nitro Racing League</p>
      </div>
    </div>
  );
}

function FieldUrlChip3() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name6 />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton3() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip3 />
        </div>
      </div>
    </div>
  );
}

function FieldUrl3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton3 />
    </div>
  );
}

function FieldPersonAvatars3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <div className="absolute inset-0 rounded-[24px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatar2} />
      </div>
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Taylor Morgan</p>
      </div>
    </div>
  );
}

function FieldPersonTag3() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars3 />
      <Name7 />
    </div>
  );
}

function FieldPersonTagVariants3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag3 />
    </div>
  );
}

function FieldPersonFalseFalse3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[44px] overflow-clip px-[8px] py-[4px] relative shrink-0 w-[140px]" data-name="Field/Person/False/False">
      <div className="absolute bg-white bottom-0 left-0 right-[-14.29%] top-0" data-name="Shape" />
      <FieldPersonTagVariants3 />
    </div>
  );
}

function MockRow3() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader3 />
      <Field13 />
      <Field14 />
      <FieldUrl3 />
      <FieldPersonFalseFalse3 />
    </div>
  );
}

function RowHeader4() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText8() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Compilation of User Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText8 />
    </div>
  );
}

function RowRowHeader4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader4 />
      </div>
      <Field15 />
    </div>
  );
}

function FieldText9() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">We appreciate your insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText9 />
    </div>
  );
}

function TagContainer4() {
  return (
    <div className="bg-[#adf0c7] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#02400f] text-[14px] text-nowrap whitespace-pre">Feedback Type</p>
    </div>
  );
}

function MdsCanvasTag4() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer4 />
    </div>
  );
}

function FieldSelectTags4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag4 />
    </div>
  );
}

function FieldSelectDefault4() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags4 />
        </div>
      </div>
    </div>
  );
}

function Field17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault4 />
    </div>
  );
}

function Name8() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Vortex Racing Group</p>
      </div>
    </div>
  );
}

function FieldUrlChip4() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name8 />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton4() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip4 />
        </div>
      </div>
    </div>
  );
}

function FieldUrl4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton4 />
    </div>
  );
}

function FieldPersonAvatars4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <div className="absolute inset-0 rounded-[24px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatar3} />
      </div>
    </div>
  );
}

function Name9() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Jamie Rivers</p>
      </div>
    </div>
  );
}

function FieldPersonTag4() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars4 />
      <Name9 />
    </div>
  );
}

function FieldPersonTagVariants4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag4 />
    </div>
  );
}

function FieldPersonFalseFalse4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[44px] overflow-clip px-[8px] py-[4px] relative shrink-0 w-[140px]" data-name="Field/Person/False/False">
      <div className="absolute bg-white bottom-0 left-0 right-[-14.29%] top-0" data-name="Shape" />
      <FieldPersonTagVariants4 />
    </div>
  );
}

function MockRow4() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader4 />
      <Field16 />
      <Field17 />
      <FieldUrl4 />
      <FieldPersonFalseFalse4 />
    </div>
  );
}

function RowHeader5() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText10() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">User Feedback Insights Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText10 />
    </div>
  );
}

function RowRowHeader5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader5 />
      </div>
      <Field18 />
    </div>
  );
}

function FieldText11() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">We are listening.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText11 />
    </div>
  );
}

function TagContainer5() {
  return (
    <div className="bg-[#e7e7e7] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre">Pending Review</p>
    </div>
  );
}

function MdsCanvasTag5() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer5 />
    </div>
  );
}

function FieldSelectTags5() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag5 />
    </div>
  );
}

function FieldSelectDefault5() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags5 />
        </div>
      </div>
    </div>
  );
}

function Field20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault5 />
    </div>
  );
}

function Name10() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Fusion Motorsports</p>
      </div>
    </div>
  );
}

function FieldUrlChip5() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name10 />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton5() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip5 />
        </div>
      </div>
    </div>
  );
}

function FieldUrl5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton5 />
    </div>
  );
}

function FieldPersonAvatars5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <div className="absolute inset-0 rounded-[24px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatar4} />
      </div>
    </div>
  );
}

function Name11() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Casey Lee</p>
      </div>
    </div>
  );
}

function FieldPersonTag5() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars5 />
      <Name11 />
    </div>
  );
}

function FieldPersonTagVariants5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag5 />
    </div>
  );
}

function FieldPersonFalseFalse5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[44px] overflow-clip px-[8px] py-[4px] relative shrink-0 w-[140px]" data-name="Field/Person/False/False">
      <div className="absolute bg-white bottom-0 left-0 right-[-14.29%] top-0" data-name="Shape" />
      <FieldPersonTagVariants5 />
    </div>
  );
}

function MockRow5() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader5 />
      <Field19 />
      <Field20 />
      <FieldUrl5 />
      <FieldPersonFalseFalse5 />
    </div>
  );
}

function RowHeader6() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText12() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Analysis of User Responses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText12 />
    </div>
  );
}

function RowRowHeader6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader6 />
      </div>
      <Field21 />
    </div>
  );
}

function FieldText13() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Thank you for your contribution.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText13 />
    </div>
  );
}

function TagContainer6() {
  return (
    <div className="bg-[#adf0c7] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="tag container">
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#02400f] text-[14px] text-nowrap whitespace-pre">Feedback Type</p>
    </div>
  );
}

function MdsCanvasTag6() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-name="mds-Canvas tag">
      <TagContainer6 />
    </div>
  );
}

function FieldSelectTags6() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Field/Select/Tags">
      <MdsCanvasTag6 />
    </div>
  );
}

function FieldSelectDefault6() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Select/Default">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit pl-[8px] pr-[24px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldSelectTags6 />
        </div>
      </div>
    </div>
  );
}

function Field23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldSelectDefault6 />
    </div>
  );
}

function Name12() {
  return (
    <div className="basis-0 content-stretch flex grow h-[20px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Storm Chaser Racing</p>
      </div>
    </div>
  );
}

function FieldUrlChip6() {
  return (
    <div className="basis-0 bg-[#f1f2f5] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Field/URL/Chip">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-9.3%] max-w-none size-[118.6%] top-[-6.98%]" src={imgImage3} />
            </div>
          </div>
          <Name12 />
        </div>
      </div>
    </div>
  );
}

function FieldLinkButton6() {
  return (
    <div className="basis-0 grow h-[44px] min-h-[44px] min-w-px relative shrink-0" data-name="Field / Link / button">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-inherit px-[8px] py-[166px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <FieldUrlChip6 />
        </div>
      </div>
    </div>
  );
}

function FieldUrl6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Field/URL">
      <FieldLinkButton6 />
    </div>
  );
}

function FieldPersonAvatars6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Field/Person/Avatars">
      <div className="absolute inset-0 rounded-[24px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatar5} />
      </div>
    </div>
  );
}

function Name13() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[69px]" data-name="Name">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Drew Parker</p>
      </div>
    </div>
  );
}

function FieldPersonTag6() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center max-w-[124px] pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Field/Person/Tag">
      <FieldPersonAvatars6 />
      <Name13 />
    </div>
  );
}

function FieldPersonTagVariants6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Field/Person/Tag variants">
      <FieldPersonTag6 />
    </div>
  );
}

function FieldPersonFalseFalse6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[44px] overflow-clip px-[8px] py-[4px] relative shrink-0 w-[140px]" data-name="Field/Person/False/False">
      <div className="absolute bg-white bottom-0 left-0 right-[-14.29%] top-0" data-name="Shape" />
      <FieldPersonTagVariants6 />
    </div>
  );
}

function MockRow6() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader6 />
      <Field22 />
      <Field23 />
      <FieldUrl6 />
      <FieldPersonFalseFalse6 />
    </div>
  );
}

function RowHeader7() {
  return <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[6px] shrink-0 w-[44px]" data-name="Row header" />;
}

function FieldText14() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-[min-content]">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">User Feedback Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Field">
      <FieldText14 />
    </div>
  );
}

function RowRowHeader7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[220px]" data-name="Row/Row header">
      <div className="flex flex-row items-center self-stretch">
        <RowHeader7 />
      </div>
      <Field24 />
    </div>
  );
}

function FieldText15() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="Field/Text">
      <div className="flex flex-col justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Your voice is important.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Field">
      <FieldText15 />
    </div>
  );
}

function FieldEmpty() {
  return (
    <div className="h-[44px] min-h-[44px] min-w-[44px] relative shrink-0 w-full" data-name="Field/Empty">
      <div className="flex flex-col justify-center min-h-inherit min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[44px] items-start justify-center min-h-inherit min-w-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
        </div>
      </div>
    </div>
  );
}

function Field26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="Field">
      <FieldEmpty />
    </div>
  );
}

function DeprecatedFieldNumber() {
  return (
    <div className="min-h-[44px] relative shrink-0 w-full" data-name="deprecated.Field / Number">
      <div className="flex flex-row items-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between min-h-inherit px-[8px] py-[4px] relative w-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
          <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap text-right">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">We are committed to making changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="Field">
      <DeprecatedFieldNumber />
    </div>
  );
}

function MockRow7() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/row">
      <RowRowHeader7 />
      <Field25 />
      <Field26 />
      <Field27 />
      <Field26 />
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Rows">
      <MockRow />
      <MockRow1 />
      <MockRow2 />
      <MockRow3 />
      <MockRow4 />
      <MockRow5 />
      <MockRow6 />
      <MockRow7 />
    </div>
  );
}

function FieldEmpty1() {
  return (
    <div className="basis-0 grow min-h-[44px] min-w-[44px] relative shrink-0 w-full" data-name="Field/Empty">
      <div className="flex flex-col justify-center min-h-inherit min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-h-inherit min-w-inherit px-[8px] py-[4px] relative size-full">
          <div className="absolute bg-white inset-0" data-name="Shape" />
        </div>
      </div>
    </div>
  );
}

function EndRow() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[44px]" data-name="End row">
      <FieldEmpty1 />
    </div>
  );
}

function MockFields() {
  return (
    <div className="content-stretch flex gap-px items-start relative shrink-0" data-name="mock/fields">
      <Rows />
      <EndRow />
    </div>
  );
}

function IconPlus1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-plus">
          <path d="M8 2V14M14 8L2 8" id="stroke-1" stroke="var(--stroke-0, #555A6A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RowAddNewRow() {
  return (
    <div className="bg-white h-[44px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Row/Add new row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[14px] py-0 relative w-full">
          <IconPlus1 />
        </div>
      </div>
    </div>
  );
}

function OctMockTableFields() {
  return (
    <div className="bg-[#e0e2e8] box-border content-stretch flex flex-col gap-px items-start p-px relative rounded-[4px] shrink-0" data-name="Oct/mock/table fields">
      <MockHeader />
      <MockFields />
      <RowAddNewRow />
    </div>
  );
}

function OctMockTableBezel() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start left-[602px] pb-[4px] pt-[8px] px-[4px] rounded-[8px] top-[158px]" data-name="Oct/mock/table bezel">
      <div aria-hidden="true" className="absolute border border-[#e0e2e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BezelHeaderOct />
      <OctMockTableFields />
    </div>
  );
}

function IconTable() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-table">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-table">
          <path d={svgPaths.p2963c40} fill="var(--fill-0, #0FA83C)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#e5f0ff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Icon">
      <IconTable />
    </div>
  );
}

function Icon2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Title10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-[6px] pr-[8px] py-[4px] relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Roobert_PRO:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222428] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Table</p>
      </div>
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <Title10 />
    </div>
  );
}

function IconArrowsOutSimple1() {
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

function HotkeyContainer2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Hotkey Container">
      <div className="h-[22px] shrink-0 w-[4px]" data-name="Spacer (4px)" />
    </div>
  );
}

function TooltipWrapper2() {
  return (
    <div className="bg-[#222428] box-border content-stretch flex items-center justify-center max-w-[280px] min-h-[32px] overflow-clip pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="tooltip-wrapper">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#fafafc] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Focus
      </p>
      <HotkeyContainer2 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
      <TooltipWrapper2 />
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
      <Content11 />
    </div>
  );
}

function Focus1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="focus">
      <IconArrowsOutSimple1 />
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
      <Tooltip2 />
    </div>
  );
}

function IconDotsThreeVertical1() {
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

function HotkeyContainer3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Hotkey Container">
      <div className="h-[22px] shrink-0 w-[4px]" data-name="Spacer (4px)" />
    </div>
  );
}

function TooltipWrapper3() {
  return (
    <div className="bg-[#222428] box-border content-stretch flex items-center justify-center max-w-[280px] min-h-[32px] overflow-clip pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="tooltip-wrapper">
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#fafafc] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        More
      </p>
      <HotkeyContainer3 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
      <TooltipWrapper3 />
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

function Tooltip3() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-center left-1/2 shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)] top-[-40px] translate-x-[-50%] w-[91px]" data-name="Tooltip">
      <Content12 />
    </div>
  );
}

function Overflow1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-0 relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="overflow">
      <IconDotsThreeVertical1 />
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

function Actions1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Focus1 />
      <Overflow1 />
    </div>
  );
}

function LocalFormatPills1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center left-[603px] overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_#e0e2e8] top-[118px]" data-name="LOCAL- Format pills">
      <Icon2 />
      <Title11 />
      <Actions1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[603px] top-[118px]">
      <LocalFormatPills1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[602px] top-[118px]">
      <OctMockTableBezel />
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[602px] top-[118px]">
      <Group3 />
    </div>
  );
}

export default function BackupOption() {
  return (
    <div className="bg-white relative size-full" data-name="Backup option">
      <MdscCanvasBackground />
      <Group2 />
      <Group4 />
    </div>
  );
}