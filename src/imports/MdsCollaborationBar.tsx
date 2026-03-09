import svgPaths from "./svg-ptaa5z3up4";
import img from "figma:asset/42b840303bc990e8ffa8c8f461770f5a53c4416d.png";
import img1 from "figma:asset/be90637410231c99908e1d893d93a7bed56b3ea6.png";
import img2 from "figma:asset/68c78e662005a13896ed6dd6f9447761ad1f8c0f.png";

function Button() {
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

function Button1() {
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

function Button2() {
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
        <Button />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Activity">
        <Button1 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Huddles">
        <Button2 />
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
            <img alt="" className="absolute h-[152.63%] left-[-59.45%] max-w-none top-[-1.54%] w-[228.91%]" src={img} />
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
              <img alt="" className="absolute h-[149.98%] left-0 max-w-none top-[-15.74%] w-full" src={img1} />
            </div>
          </div>
        </div>
        <div className="bg-[#f1f2f5] box-border content-stretch flex flex-col items-center justify-center mr-[-8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="Avatar 2">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[1001px]" />
          <div className="absolute inset-0 rounded-[999px]" data-name="Photo">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[999px] size-full" src={img2} />
          </div>
        </div>
      </div>
      <UserMenu />
    </div>
  );
}

function ButtonContainer() {
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

function ButtonContainer1() {
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
        <ButtonContainer />
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Share">
        <ButtonContainer1 />
      </div>
    </div>
  );
}

export default function MdsCollaborationBar() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="mds-CollaborationBar">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-[4px] pr-[8px] py-0 relative size-full">
          <Menus />
          <Users />
          <Actions />
        </div>
      </div>
    </div>
  );
}