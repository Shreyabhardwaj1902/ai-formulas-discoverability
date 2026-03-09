import svgPaths from "./svg-7pps5er6tr";
import img1 from "figma:asset/42b840303bc990e8ffa8c8f461770f5a53c4416d.png";
import img2 from "figma:asset/be90637410231c99908e1d893d93a7bed56b3ea6.png";
import img3 from "figma:asset/68c78e662005a13896ed6dd6f9447761ad1f8c0f.png";
import imgMdscCanvasBackground from "figma:asset/0bf3088851693161f8463ad5c70f15940f4ab3b1.png";
import { img } from "./svg-fo9t4";

function Button() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-lines-three-horizontal">
        <div className="absolute inset-[16.667%]" data-name="icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p5717100} fill="var(--fill-0, #222428)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[1.82%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[64px_22.581px] right-0 top-0" data-name="Group" style={{ maskImage: `url('${img}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 20">
        <g id="Group">
          <path d={svgPaths.p1e551700} fill="var(--fill-0, #222428)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-[1.82%] contents left-0 right-0 top-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-center justify-center ml-[48px] mt-[9px] relative" data-name="Logo Container">
      <div className="h-[20px] overflow-clip relative shrink-0 w-[56px]" data-name=".❌ Logotype [deprecated]">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-center ml-0 mt-0 relative size-[40px]" data-name="Main Menu">
        <Button />
      </div>
      <LogoContainer />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Group2 />
    </div>
  );
}

function IconSpacer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-end relative shrink-0" data-name="icon spacer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="mds-Board Icons">
        <div className="absolute inset-[8.333%]" data-name="Union">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p3323a800} fill="url(#paint0_linear_1_5247)" id="Union" stroke="var(--stroke-0, #22883F)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5247" x1="8.33333" x2="8.33333" y1="0" y2="16.6667">
                <stop stopColor="#4EBE6C" />
                <stop offset="1" stopColor="#6BD98B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222428] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">Roadmap brainstorm</p>
      </div>
    </div>
  );
}

function BoardName() {
  return (
    <div className="content-stretch flex h-[40px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="Board name">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <IconSpacer />
      <BoardName />
    </div>
  );
}

function NudgeContainer() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-center justify-center pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Nudge Container">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-none overflow-ellipsis overflow-hidden relative shrink-0 text-[#503a03] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Internal
      </p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-[#ffed7b] box-border content-stretch flex flex-col h-[20px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="button container">
      <NudgeContainer />
    </div>
  );
}

function ClassificationContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Classification Container">
      <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-full" data-name="Classification">
        <ButtonContainer />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center pl-0 pr-[4px] py-0 relative shrink-0">
      <Frame9 />
      <Frame />
      <ClassificationContainer />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-dots-three-vertical">
        <div className="absolute flex inset-[8.33%_41.67%] items-center justify-center">
          <div className="flex-none h-[4px] rotate-[90deg] w-[20px]">
            <div className="relative size-full" data-name="shape-1">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4">
                  <g id="shape-1">
                    <path d={svgPaths.p2d5a3780} fill="var(--fill-0, #222428)" />
                    <path d={svgPaths.p20f9c440} fill="var(--fill-0, #222428)" />
                    <path d={svgPaths.p2173e1f0} fill="var(--fill-0, #222428)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[48px] items-center px-[4px] py-0 relative rounded-[8px] shrink-0" data-name="Default">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <Frame1 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Dropdown">
        <Button1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[56px]" data-name="button">
      <div className="h-[24px] relative shrink-0 w-[48px]" data-name="icon-facilitation-tools">
        <div className="absolute h-[20.005px] left-[2px] top-[2px] w-[44px]" data-name="icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 20">
              <g id="icon">
                <path d={svgPaths.p334fb980} fill="var(--fill-0, #1A1B1E)" />
                <path d={svgPaths.p19abcc00} fill="var(--fill-0, #1A1B1E)" />
                <path clipRule="evenodd" d={svgPaths.p1499a400} fill="var(--fill-0, #1A1B1E)" fillRule="evenodd" />
                <path d={svgPaths.p317af900} fill="var(--fill-0, #1A1B1E)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-activity">
        <div className="absolute inset-[41.67%_29.17%_37.5%_31.25%]" data-name="stroke-1">
          <div className="absolute bottom-[-10.29%] left-[-9.03%] right-0 top-[-10.29%]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
              <path d={svgPaths.p3c9c7b00} fill="var(--stroke-0, #222428)" id="stroke-1" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]" data-name="stroke-1">
          <div className="absolute inset-[-5.556%]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1fe7d500} id="stroke-1" stroke="var(--stroke-0, #222428)" strokeLinejoin="bevel" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[24px] size-[8px] top-[8px]" data-name="Notification">
        <div className="absolute inset-[-18.75%]" style={{ "--fill-0": "rgba(56, 89, 255, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <circle cx="5.5" cy="5.5" fill="var(--fill-0, #3859FF)" id="Notification" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-video-camera-simple">
        <div className="absolute inset-[16.67%_8.33%]" data-name="icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p1a0ba170} fill="var(--fill-0, #222428)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menus() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Menus">
      <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[64px]" data-name="Facilitation">
        <Button2 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Activity">
        <Button3 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Huddles">
        <Button4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f1f2f5] box-border content-stretch flex gap-[4px] items-center pl-[2px] pr-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[28px]" data-name="mds-Avatar">
        <div className="absolute inset-0 rounded-[999px]" data-name="Photo">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
            <img alt="" className="absolute h-[152.63%] left-[-59.45%] max-w-none top-[-1.54%] w-[228.91%]" src={img1} />
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222428] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">7</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="icon-chevron-down">
        <div className="absolute bottom-[33.33%] flex items-center justify-center left-1/4 right-1/4 top-[41.67%]">
          <div className="flex-none h-[12px] rotate-[270deg] w-[6px]">
            <div className="relative size-full" data-name="stroke-1">
              <div className="absolute inset-[-6.63%_-13.26%]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
                  <path d={svgPaths.p37152800} id="stroke-1" stroke="var(--stroke-0, #222428)" strokeLinejoin="bevel" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMenu() {
  return (
    <div className="box-border content-stretch flex items-center mr-[-8px] relative rounded-[999px] shrink-0" data-name="User Menu">
      <Container />
    </div>
  );
}

function Users() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Users">
      <div className="box-border content-stretch flex items-center justify-center mr-[-8px] pl-0 pr-[8px] py-0 relative shrink-0" data-name="Avatar Group">
        <div className="bg-[#f1f2f5] box-border content-stretch flex flex-col items-center justify-center mr-[-8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="Avatar 1">
          <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-[-3px] pointer-events-none rounded-[1002px]" />
          <div className="absolute inset-0 rounded-[999px]" data-name="Photo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
              <img alt="" className="absolute h-[149.98%] left-0 max-w-none top-[-15.74%] w-full" src={img2} />
            </div>
          </div>
        </div>
        <div className="bg-[#f1f2f5] box-border content-stretch flex flex-col items-center justify-center mr-[-8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="Avatar 2">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[1001px]" />
          <div className="absolute inset-0 rounded-[999px]" data-name="Photo">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[999px] size-full" src={img3} />
          </div>
        </div>
      </div>
      <UserMenu />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="bg-[#e9eaef] box-border content-stretch flex gap-[4px] h-full items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button Container">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.83%_29.17%]" data-name="shape-1">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 36, 40, 1)", "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
              <path d={svgPaths.p12b52600} fill="var(--fill-0, #222428)" id="shape-1" stroke="var(--stroke-0, #222428)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222428] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none whitespace-pre">Present</p>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="bg-[#3859ff] box-border content-stretch flex gap-[4px] h-full items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button Container">
      <div className="relative shrink-0 size-[16px]" data-name="Icon Start">
        <div className="absolute inset-[12.5%_16.67%]" data-name="stroke-1">
          <div className="absolute inset-[-5.3%_-7.03%_-6.25%_-7.03%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
              <path d={svgPaths.p1c0db500} id="stroke-1" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-white inset-[45.83%_54.17%_45.83%_37.5%]" data-name="shape-1" />
        <div className="absolute bg-white inset-[45.83%_37.5%_45.83%_54.17%]" data-name="shape-1" />
        <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[8.33%]">
          <div className="flex-none h-[2.186e_-7px] rotate-[90deg] w-[4px]">
            <div className="relative size-full" data-name="stroke-1">
              <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1.63918e-07 1L2.66667 1" id="stroke-1" stroke="var(--stroke-0, white)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Actions">
      <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Present">
        <ButtonContainer1 />
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Share">
        <ButtonContainer2 />
      </div>
    </div>
  );
}

function MdsCollaborationBar() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex gap-[12px] h-[48px] items-center ml-0 mt-0 pl-[4px] pr-[8px] py-0 relative rounded-[8px]" data-name="mds-CollaborationBar">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <Menus />
      <Users />
      <Actions />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MdsCollaborationBar />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 p-[8px] top-0 w-[1512px]">
      <Default />
      <Group3 />
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-sparks-filled">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Vector">
                <path d={svgPaths.pcb6a370} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1a911b40} fill="var(--fill-0, white)" />
                <path d={svgPaths.p75c7d00} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[4px] items-center ml-0 mt-0 px-0 py-[4px] relative rounded-[999px] w-[48px]" data-name="Bottom">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Undo">
        <Button5 />
      </div>
    </div>
  );
}

function IconSingleSparksFilled() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-single-sparks-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-single-sparks-filled">
          <path d={svgPaths.p307b0600} fill="var(--fill-0, #222428)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[100px] shadow-[0px_2px_4px_0px_rgba(34,36,40,0.08)] shrink-0 size-[20px]">
      <IconSingleSparksFilled />
    </div>
  );
}

function Frame7() {
  return <div className="basis-0 grow h-[20px] min-h-px min-w-px shrink-0" />;
}

function Frame5() {
  return (
    <div className="bg-[#e9eaef] box-border content-stretch flex items-start p-[2px] relative rounded-[100px] shrink-0 w-[36px]">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[4px] relative shrink-0">
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-[40px]" data-name="mds-Divider">
        <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="line">
          <div aria-hidden="true" className="absolute border border-[#e9eaef] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#e8ecfc] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[40px]" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-cursor-filled">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(56, 89, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p19628300} fill="var(--fill-0, #3859FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-layout">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p18c1f300} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-sticky-note">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p347f9f00} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-text-t">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p18487300} fill="var(--fill-0, #222428)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-shapes-lines">
        <div className="absolute inset-[7.29%_6.25%_8.33%_6.8%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p15d95c80} fill="var(--fill-0, #222428)" fillRule="evenodd" />
                <path d={svgPaths.p3bff9b00} fill="var(--fill-0, #222428)" />
                <path clipRule="evenodd" d={svgPaths.p9939e00} fill="var(--fill-0, #222428)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2c39000} fill="var(--fill-0, #222428)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-pen-tip">
        <div className="absolute inset-[8.33%_8.32%_8.59%_8.59%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p7a3500} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-frame">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p439dd00} fill="var(--fill-0, #222428)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-smiley-sticker">
        <div className="absolute inset-[8.33%_8.13%_8.33%_8.54%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pb2682c0} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-chat-lines-two">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Vector">
                <path d={svgPaths.p1a4f480} fill="var(--fill-0, #222428)" />
                <path d="M5 9H7V11H5V9Z" fill="var(--fill-0, #222428)" />
                <path d="M9 9H11V11H9V9Z" fill="var(--fill-0, #222428)" />
                <path d="M13 9H15V11H13V9Z" fill="var(--fill-0, #222428)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-plus-square">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 27, 30, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pc004e00} fill="var(--fill-0, #222428)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[4px] items-center ml-0 mt-[56px] pb-[4px] pt-[8px] px-0 relative rounded-[8px] w-[48px]" data-name="Main">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(34,36,40,0.08)]" />
      <Frame8 />
      <Frame3 />
      <div className="box-border content-stretch flex items-center justify-center p-[4px] relative shrink-0 size-[40px]" data-name="mds-Toolbar-Item">
        <Button6 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 2">
        <Button7 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 3">
        <Button8 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 4">
        <Button9 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 5">
        <Button10 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 6">
        <Button11 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 7">
        <Button12 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 8">
        <Button13 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Slot 9">
        <Button14 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Discover">
        <Button15 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Bottom />
      <Main />
    </div>
  );
}

function Button16() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-frame-lines-two">
        <div className="absolute inset-[8.333%]" data-name="stroke-1">
          <div className="absolute inset-0" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p2b98f600} id="stroke-1" stroke="var(--stroke-0, #222428)" strokeLinejoin="bevel" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_33.33%_58.33%_33.33%]" data-name="stroke-1">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d="M0 1H8" id="stroke-1" stroke="var(--stroke-0, #222428)" strokeLinejoin="bevel" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_41.67%_33.33%]" data-name="stroke-1">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d="M0 1H8" id="stroke-1" stroke="var(--stroke-0, #222428)" strokeLinejoin="bevel" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-minus">
        <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="stroke-1">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
              <path d="M16 1H0" id="stroke-1" stroke="var(--stroke-0, #222428)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Percentage() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-[8px] py-[12px] relative rounded-[4px] shrink-0 w-[58px]" data-name="Percentage">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222428] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-plus">
        <div className="absolute inset-[12.5%]" data-name="stroke-1">
          <div className="absolute inset-0" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d="M9 0V18M18 9L5.29819e-08 9" id="stroke-1" stroke="var(--stroke-0, #222428)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="button">
      <div className="relative shrink-0 size-[24px]" data-name="icon-question-mark-circle">
        <div className="absolute bg-[#222428] bottom-1/4 left-[45.83%] right-[45.83%] top-[66.67%]" data-name="shape-1" />
        <div className="absolute inset-[29.17%_37.5%_37.52%_37.5%]" data-name="stroke-1">
          <div className="absolute bottom-0 left-[-16.67%] right-[-16.67%] top-[-12.51%]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p39614000} fill="var(--stroke-0, #222428)" id="stroke-1" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]" data-name="stroke-1">
          <div className="absolute inset-[-5.556%]" style={{ "--stroke-0": "rgba(34, 36, 40, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="stroke-1" r="9" stroke="var(--stroke-0, #222428)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icons">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="List">
        <Button16 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Zoom Out">
        <Button17 />
      </div>
      <Percentage />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Zoom In">
        <Button18 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Help">
        <Button19 />
      </div>
    </div>
  );
}

function MdsNavigationBar() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[16px] h-[48px] items-center px-[4px] py-0 relative rounded-[8px] shrink-0" data-name="mds-NavigationBar">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <Icons />
    </div>
  );
}

export default function ToggleOffBlankBoard() {
  return (
    <div className="bg-white relative size-full" data-name="Toggle Off / Blank board">
      <div className="absolute bg-[#f2f2f2] h-[982px] overflow-clip right-0 top-1/2 translate-y-[-50%] w-[1512px]" data-name="mdsc-canvas-background">
        <div aria-hidden="true" className="absolute bg-repeat bg-size-[21px_21px] bg-top-left inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url('${imgMdscCanvasBackground}')` }} />
      </div>
      <Frame4 />
      <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 px-[8px] py-0 top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="Creation toolbar">
        <Group1 />
      </div>
      <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] right-0" data-name="Navigation toolbar">
        <MdsNavigationBar />
      </div>
    </div>
  );
}