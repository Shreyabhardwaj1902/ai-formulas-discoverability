import svgPaths from "./svg-wi134zte8t";
import imgMdscCanvasBackground from "figma:asset/0bf3088851693161f8463ad5c70f15940f4ab3b1.png";

function MdscCanvasBackground() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[982px] overflow-clip right-0 top-1/2 translate-y-[-50%] w-[1512px]" data-name="mdsc-canvas-background">
      <div aria-hidden="true" className="absolute bg-repeat bg-size-[21px_21px] bg-top-left inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url('${imgMdscCanvasBackground}')` }} />
    </div>
  );
}

function IconSparksFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-sparks-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-sparks-filled">
          <g id="Vector">
            <path d={svgPaths.pbcf3300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p308c6600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p215f8000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconSparksFilled />
    </div>
  );
}

function Undo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Undo">
      <Button />
    </div>
  );
}

function Bottom() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[4px] items-center ml-0 mt-0 px-0 py-[4px] relative rounded-[999px] w-[48px]" data-name="Bottom">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <Undo />
    </div>
  );
}

function IconCursorFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-cursor-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-cursor-filled">
          <path d={svgPaths.p3b45700} fill="var(--fill-0, #222428)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconCursorFilled />
    </div>
  );
}

function MdsToolbarItem() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[8px]" data-name="mds-Toolbar-Item">
      <Button1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1410119348">
          <g id="icon-plus-box">
            <rect height="24" stroke="var(--stroke-0, #3859FF)" width="24" />
            <g id="Vector">
              <path d={svgPaths.p2c9f5180} fill="var(--fill-0, #3859FF)" />
              <path d={svgPaths.pd550f80} fill="var(--fill-0, #3859FF)" />
            </g>
          </g>
          <line id="Line 2" stroke="var(--stroke-0, #3859FF)" strokeWidth="2" x1="7" x2="17" y1="16" y2="16" />
          <line id="Line 3" stroke="var(--stroke-0, #3859FF)" strokeWidth="2" x1="7" x2="17" y1="12" y2="12" />
          <line id="Line 4" stroke="var(--stroke-0, #3859FF)" strokeWidth="2" x1="7" x2="12" y1="8" y2="8" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e8ecfc] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[40px]" data-name="button">
      <Group2 />
    </div>
  );
}

function Slot8() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[4px] p-[4px] size-[40px] top-[52px]" data-name="Slot 10">
      <Button2 />
    </div>
  );
}

function IconLayout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-layout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-layout">
          <path clipRule="evenodd" d={svgPaths.p24aa9700} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconLayout />
    </div>
  );
}

function Slot() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[96px]" data-name="Slot 2">
      <Button3 />
    </div>
  );
}

function IconStickyNote() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-sticky-note">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-sticky-note">
          <path clipRule="evenodd" d={svgPaths.p4b151f0} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconStickyNote />
    </div>
  );
}

function Slot1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[140px]" data-name="Slot 3">
      <Button4 />
    </div>
  );
}

function IconTextT() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-text-t">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-text-t">
          <path d={svgPaths.p30d1f300} fill="var(--fill-0, #222428)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconTextT />
    </div>
  );
}

function Slot2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[184px]" data-name="Slot 4">
      <Button5 />
    </div>
  );
}

function IconShapesLines() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-shapes-lines">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-shapes-lines">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p28942200} fill="var(--fill-0, #222428)" fillRule="evenodd" />
            <path d={svgPaths.p2426d900} fill="var(--fill-0, #222428)" />
            <path clipRule="evenodd" d={svgPaths.p460fcf0} fill="var(--fill-0, #222428)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pdf15970} fill="var(--fill-0, #222428)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconShapesLines />
    </div>
  );
}

function Slot3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[228px]" data-name="Slot 5">
      <Button6 />
    </div>
  );
}

function IconPenTip() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-pen-tip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-pen-tip">
          <path clipRule="evenodd" d={svgPaths.p34d5d700} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconPenTip />
    </div>
  );
}

function Slot4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[272px]" data-name="Slot 6">
      <Button7 />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-frame">
          <path d={svgPaths.p3f16f400} fill="var(--fill-0, #222428)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconFrame />
    </div>
  );
}

function Slot5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[316px]" data-name="Slot 7">
      <Button8 />
    </div>
  );
}

function IconSmileySticker() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-smiley-sticker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-smiley-sticker">
          <path clipRule="evenodd" d={svgPaths.p1ce95200} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconSmileySticker />
    </div>
  );
}

function Slot6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[360px]" data-name="Slot 8">
      <Button9 />
    </div>
  );
}

function IconChatLinesTwo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-chat-lines-two">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-chat-lines-two">
          <g id="Vector">
            <path d={svgPaths.p1cb1900} fill="var(--fill-0, #222428)" />
            <path d="M7 11H9V13H7V11Z" fill="var(--fill-0, #222428)" />
            <path d="M11 11H13V13H11V11Z" fill="var(--fill-0, #222428)" />
            <path d="M15 11H17V13H15V11Z" fill="var(--fill-0, #222428)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconChatLinesTwo />
    </div>
  );
}

function Slot7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[404px]" data-name="Slot 9">
      <Button10 />
    </div>
  );
}

function IconPlusSquare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-plus-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-plus-square">
          <path clipRule="evenodd" d={svgPaths.p1691b100} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <IconPlusSquare />
    </div>
  );
}

function Discover() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[4px] size-[40px] top-[448px]" data-name="Discover">
      <Button11 />
    </div>
  );
}

function Main() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[492px] ml-0 mt-[56px] relative rounded-[8px] w-[48px]" data-name="Main">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(34,36,40,0.08)]" />
      <MdsToolbarItem />
      <Slot8 />
      <Slot />
      <Slot1 />
      <Slot2 />
      <Slot3 />
      <Slot4 />
      <Slot5 />
      <Slot6 />
      <Slot7 />
      <Discover />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Bottom />
      <Main />
    </div>
  );
}

function CreationToolbar() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 px-[8px] py-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Creation toolbar">
      <Group />
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-frame">
          <path d={svgPaths.p1efc2400} fill="var(--fill-0, #222428)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <IconFrame1 />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Frame</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer />
      <LabelContainer />
    </div>
  );
}

function Container() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item16() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item 16">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative w-full">
          <Item />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="icon\">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon\">
          <path clipRule="evenodd" d={svgPaths.pf474100} fill="var(--fill-0, #0E9DCD)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FormatIcon16Px() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <Icon />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Document</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer1 />
      <LabelContainer1 />
    </div>
  );
}

function Container1() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item2() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item1 />
      <Container1 />
    </div>
  );
}

function SpaceCreateMenu() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item2 />
    </div>
  );
}

function FormatIcon16Px1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="stroke-1">
          <path clipRule="evenodd" d={svgPaths.p23391d80} fill="var(--fill-0, #DA792B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px1 />
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Diagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer2 />
      <LabelContainer2 />
    </div>
  );
}

function Container2() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item4() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item3 />
      <Container2 />
    </div>
  );
}

function SpaceCreateMenu1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item4 />
    </div>
  );
}

function FormatIcon16Px2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p8fe9080} fill="var(--fill-0, #0FA83C)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px2 />
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Table</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer3 />
      <LabelContainer3 />
    </div>
  );
}

function Container3() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item6() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item5 />
      <Container3 />
    </div>
  );
}

function SpaceCreateMenu2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item6 />
    </div>
  );
}

function FormatIcon16Px3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Union">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pdbac000} fill="var(--fill-0, #0FA83C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2f293d00} fill="var(--fill-0, #0FA83C)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p272d0a80} fill="var(--fill-0, #0FA83C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px3 />
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Timeline</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer4 />
      <LabelContainer4 />
    </div>
  );
}

function Container4() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item8() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item7 />
      <Container4 />
    </div>
  );
}

function SpaceCreateMenu3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item8 />
    </div>
  );
}

function FormatIcon16Px4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p2f85fc00} fill="var(--fill-0, #0FA83C)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px4 />
    </div>
  );
}

function LabelContainer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Kanban</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer5 />
      <LabelContainer5 />
    </div>
  );
}

function Container5() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item10() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item9 />
      <Container5 />
    </div>
  );
}

function SpaceCreateMenu4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item10 />
    </div>
  );
}

function FormatIcon16Px5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="stroke-1">
          <path d={svgPaths.p9f0c900} fill="var(--fill-0, #8167E5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px5 />
    </div>
  );
}

function LabelContainer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Prototype</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer6 />
      <LabelContainer6 />
    </div>
  );
}

function Container6() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item12() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item11 />
      <Container6 />
    </div>
  );
}

function SpaceCreateMenu5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item12 />
    </div>
  );
}

function FormatIcon16Px6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Format icon 16px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Vector">
          <g id="Vector_2">
            <path d={svgPaths.p4adad70} fill="var(--fill-0, #DB4F4F)" />
            <path d={svgPaths.p2421c780} fill="var(--fill-0, #DB4F4F)" />
            <path d={svgPaths.p4467700} fill="var(--fill-0, #DB4F4F)" />
            <path d={svgPaths.p2242f400} fill="var(--fill-0, #DB4F4F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0" data-name="Icon_container">
      <FormatIcon16Px6 />
    </div>
  );
}

function LabelContainer7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Slides</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer7 />
      <LabelContainer7 />
    </div>
  );
}

function Container7() {
  return <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[28px] px-0 py-[8px] shrink-0" data-name="Container" />;
}

function Item17() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0 w-[226px]" data-name="Item 2">
      <Item14 />
      <Container7 />
    </div>
  );
}

function SpaceCreateMenu6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Space create menu">
      <Item17 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Item16 />
      <SpaceCreateMenu />
      <SpaceCreateMenu1 />
      <SpaceCreateMenu2 />
      <SpaceCreateMenu3 />
      <SpaceCreateMenu4 />
      <SpaceCreateMenu5 />
      <SpaceCreateMenu6 />
    </div>
  );
}

function MdsDivider() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="mds-Divider">
      <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="line">
        <div aria-hidden="true" className="absolute border border-[#e9eaef] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="Item">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <MdsDivider />
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item 15">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[8px] py-0 relative w-full">
          <Item18 />
        </div>
      </div>
    </div>
  );
}

function IconArrowCurvesSparks() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="icon-arrow-curves-sparks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-arrow-curves-sparks">
          <g id="Vector">
            <path d={svgPaths.p5e63a00} fill="url(#paint0_linear_2_5806)" />
            <path d={svgPaths.p3ec46600} fill="url(#paint1_linear_2_5806)" />
            <path d={svgPaths.p1d182780} fill="url(#paint2_linear_2_5806)" />
          </g>
        </g>
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
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-end pl-[8px] pr-0 py-[12px] relative shrink-0 w-[24px]" data-name="Icon_container">
      <IconArrowCurvesSparks />
    </div>
  );
}

function LabelContainer8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="LabelContainer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[8px] pr-0 py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#222428] text-[14px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden">Flows</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Item">
      <IconContainer8 />
      <LabelContainer8 />
    </div>
  );
}

function Item13() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item 13">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pl-0 pr-[8px] py-0 relative w-full">
          <Item19 />
        </div>
      </div>
    </div>
  );
}

function SpaceCreateHomeDashboardRecentSidebar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[4px] shadow-[0px_0px_12px_0px_rgba(34,36,40,0.04),0px_2px_8px_0px_rgba(34,36,40,0.12)] shrink-0 w-[250px]" data-name="Space Create: Home Dashboard + Recent Sidebar">
      <Frame1 />
      <Item15 />
      <Item13 />
    </div>
  );
}

function LocalSpacesMenuFull() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[10px] items-start justify-center ml-0 mt-0 relative" data-name="Local - Spaces menu full">
      <SpaceCreateHomeDashboardRecentSidebar />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <LocalSpacesMenuFull />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] inset-[31.26%_79.37%_27.9%_4.1%] items-center">
      <Group1 />
    </div>
  );
}

export default function BackupOption() {
  return (
    <div className="bg-white relative size-full" data-name="Backup option">
      <MdscCanvasBackground />
      <CreationToolbar />
      <Frame />
    </div>
  );
}