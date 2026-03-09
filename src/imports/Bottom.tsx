import svgPaths from "./svg-3t2tk1i2aj";

function Button() {
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

export default function Bottom() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-0 py-[4px] relative rounded-[999px] size-full" data-name="Bottom">
      <div aria-hidden="true" className="absolute border-[#e9eaef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_8px_0px_rgba(34,36,40,0.05)]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Undo">
        <Button />
      </div>
    </div>
  );
}