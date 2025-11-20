import svgPaths from "./svg-naza2vtcjk";

function Line() {
  return <div className="bg-[#71c0b2] h-[4px] opacity-80 rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="line" />;
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.078px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#100501] text-[14px] text-nowrap top-0 tracking-[1.4px] uppercase whitespace-pre">The Solution</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[7px] h-[20px] items-center relative shrink-0 w-[579px]" data-name="Container">
      <Line />
      <Heading />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[676px]" data-name="text">
      <Container />
      <p className="font-['Lora:Medium',sans-serif] font-medium leading-[1.21] min-w-full relative shrink-0 text-[#100501] text-[47.78px] tracking-[0.5972px] w-[min-content]">The Three Layers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.21] min-w-full not-italic relative shrink-0 text-[#4b3c31] text-[19.2px] tracking-[0.24px] w-[min-content]">A comprehensive approach to ensure adherence and outcomes.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#e1f2e1] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[56px]">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[1.21] not-italic relative shrink-0 text-[#4e8751] text-[27.65px] text-center text-nowrap tracking-[0.3456px] whitespace-pre">01</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[165px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#42351f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Medically-Tailored Food
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic relative shrink-0 text-[#4b3c31] text-[18px] w-full">Condition-specific meals and produce delivered directly to the home. Culturally relevant and designed for healing.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[120px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_54.17%_54.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-12.5%]" style={{ "--stroke-0": "rgba(66, 53, 31, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 55">
            <path d={svgPaths.p29e76000} id="Vector" stroke="var(--stroke-0, #42351F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" style={{ stroke: "color(display-p3 0.2588 0.2078 0.1216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_70.83%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5px]" style={{ "--stroke-0": "rgba(66, 53, 31, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 110">
            <path d="M5 5V105" id="Vector" stroke="var(--stroke-0, #42351F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" style={{ stroke: "color(display-p3 0.2588 0.2078 0.1216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_8.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-20%]" style={{ "--stroke-0": "rgba(66, 53, 31, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 110">
            <path d={svgPaths.p14412600} id="Vector" stroke="var(--stroke-0, #42351F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" style={{ stroke: "color(display-p3 0.2588 0.2078 0.1216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start opacity-[0.04] pb-0 pt-[24px] px-[24px] right-0 size-[168px] top-0" data-name="Solution">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start p-[36px] relative w-full">
          <Frame20 />
          <Frame />
          <Solution />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#e1f2e1] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[56px]">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[1.21] not-italic relative shrink-0 text-[#4e8751] text-[27.65px] text-center text-nowrap tracking-[0.3456px] whitespace-pre">02</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[165px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#42351f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Integrated Clinical Care
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic relative shrink-0 text-[#4b3c31] text-[18px] w-full">RDNs, behavioral health navigators, and care coordinators working together with hospital teams.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[120px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]" style={{ "--stroke-0": "rgba(66, 53, 31, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 96">
            <path d={svgPaths.p10672280} id="Vector" stroke="var(--stroke-0, #42351F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" style={{ stroke: "color(display-p3 0.2588 0.2078 0.1216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Solution1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start opacity-[0.04] pb-0 pt-[24px] px-[24px] right-0 size-[168px] top-0" data-name="Solution">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start p-[36px] relative w-full">
          <Frame21 />
          <Frame15 />
          <Solution1 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#e1f2e1] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[56px]">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[1.21] not-italic relative shrink-0 text-[#4e8751] text-[27.65px] text-center text-nowrap tracking-[0.3456px] whitespace-pre">03</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[165px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#42351f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Data & Automation`}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic relative shrink-0 text-[#4b3c31] text-[18px] w-full">VozCare platform + AVA AI tracking outcomes, coordinating care, and proving ROI in real-time.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[120px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]" style={{ "--stroke-0": "rgba(66, 53, 31, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 110">
            <path d={svgPaths.p29d34c00} id="Vector" stroke="var(--stroke-0, #42351F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" style={{ stroke: "color(display-p3 0.2588 0.2078 0.1216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Solution2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start opacity-[0.04] pb-0 pt-[24px] px-[24px] right-0 size-[168px] top-0" data-name="Solution">
      <Icon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start p-[36px] relative w-full">
          <Frame22 />
          <Frame16 />
          <Solution2 />
        </div>
      </div>
    </div>
  );
}

function Solution3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Solution">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[54px] items-start justify-center px-0 py-[54px] relative shrink-0 w-[1280px]" data-name="container">
      <Text />
      <Solution3 />
    </div>
  );
}

function Line1() {
  return <div className="bg-[#71c0b2] h-[4px] opacity-80 rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="line" />;
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.078px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#100501] text-[14px] text-nowrap top-0 tracking-[1.4px] uppercase whitespace-pre">The Business Case</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[7px] h-[20px] items-center relative shrink-0 w-[579px]" data-name="Container">
      <Line1 />
      <Heading1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[676px]" data-name="text">
      <Container5 />
      <p className="font-['Lora:Medium',sans-serif] font-medium leading-[1.21] min-w-full relative shrink-0 text-[#100501] text-[47.78px] tracking-[0.5972px] w-[min-content]">
        <span>{`Why This Is a `}</span>
        <span className="font-['Lora:Bold',sans-serif] font-bold text-[#c26346]">No-Brainer</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.21] min-w-full not-italic relative shrink-0 text-[#4b3c31] text-[19.2px] tracking-[0.24px] w-[min-content]">A comprehensive approach to ensure adherence and outcomes.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]" style={{ "--stroke-0": "rgba(82, 163, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11">
            <path d={svgPaths.p94d2af0} id="Vector" stroke="var(--stroke-0, #52A395)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.3216 0.6392 0.5843)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]" style={{ "--stroke-0": "rgba(82, 163, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
            <path d={svgPaths.p13f8000} id="Vector" stroke="var(--stroke-0, #52A395)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.3216 0.6392 0.5843)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]" style={{ "--stroke-0": "rgba(82, 163, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.p21b04700} id="Vector" stroke="var(--stroke-0, #52A395)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.3216 0.6392 0.5843)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]" style={{ "--stroke-0": "rgba(82, 163, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pc2f8c00} id="Vector" stroke="var(--stroke-0, #52A395)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.3216 0.6392 0.5843)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Impact() {
  return (
    <div className="bg-[#d9f1ec] box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Impact">
      <Icon3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[165px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#42351f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        For Patients
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic relative shrink-0 text-[#4b3c31] text-[18px] w-full">Healing instead of endless readmissions. HbA1c drops, hospitalizations prevented, and quality of life restored.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start p-[36px] relative size-full">
          <Impact />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[41.67%] right-[41.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-25%]" style={{ "--stroke-0": "rgba(194, 99, 70, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
            <path d="M1.33333 1.33333H6.66667" id="Vector" stroke="var(--stroke-0, #C26346)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.7608 0.3882 0.2745)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_41.67%_66.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-25%]" style={{ "--stroke-0": "rgba(194, 99, 70, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
            <path d="M1.33333 1.33333H6.66667" id="Vector" stroke="var(--stroke-0, #C26346)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.7608 0.3882 0.2745)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_41.67%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-25%]" style={{ "--stroke-0": "rgba(194, 99, 70, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
            <path d={svgPaths.p17955880} id="Vector" stroke="var(--stroke-0, #C26346)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.7608 0.3882 0.2745)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]" style={{ "--stroke-0": "rgba(194, 99, 70, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 22">
            <path d={svgPaths.p1ea09c80} id="Vector" stroke="var(--stroke-0, #C26346)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.7608 0.3882 0.2745)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-8.33%]" style={{ "--stroke-0": "rgba(194, 99, 70, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 27">
            <path d={svgPaths.p10b77500} id="Vector" stroke="var(--stroke-0, #C26346)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.7608 0.3882 0.2745)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Impact1() {
  return (
    <div className="bg-[#efbcac] box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Impact">
      <Icon4 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow">
          <mask height="24" id="mask0_1_906" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" style={{ fill: "color(display-p3 0.8510 0.8510 0.8510)", fillOpacity: "1" }} width="24" />
          </mask>
          <g mask="url(#mask0_1_906)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #E67E5F)" id="arrow_forward" style={{ fill: "color(display-p3 0.9020 0.4941 0.3725)", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#4b3c31]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[19.2px] tracking-[0.24px] w-full">No added workload</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13.33px] tracking-[0.1666px] w-full">integrates with EHRs</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Arrow />
      <Frame1 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow">
          <mask height="24" id="mask0_1_906" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" style={{ fill: "color(display-p3 0.8510 0.8510 0.8510)", fillOpacity: "1" }} width="24" />
          </mask>
          <g mask="url(#mask0_1_906)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #E67E5F)" id="arrow_forward" style={{ fill: "color(display-p3 0.9020 0.4941 0.3725)", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#4b3c31]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[19.2px] tracking-[0.24px] w-full">Saves money</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13.33px] tracking-[0.1666px] w-full">avoided penalties</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Arrow1 />
      <Frame2 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow">
          <mask height="24" id="mask0_1_906" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" style={{ fill: "color(display-p3 0.8510 0.8510 0.8510)", fillOpacity: "1" }} width="24" />
          </mask>
          <g mask="url(#mask0_1_906)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #E67E5F)" id="arrow_forward" style={{ fill: "color(display-p3 0.9020 0.4941 0.3725)", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#4b3c31]">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[19.2px] tracking-[0.24px] w-full">Makes money</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13.33px] tracking-[0.1666px] w-full">shared savings</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full">
      <Arrow2 />
      <Frame3 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow">
          <mask height="24" id="mask0_1_906" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" style={{ fill: "color(display-p3 0.8510 0.8510 0.8510)", fillOpacity: "1" }} width="24" />
          </mask>
          <g mask="url(#mask0_1_906)">
            <path d={svgPaths.p54e7200} fill="var(--fill-0, #E67E5F)" id="arrow_forward" style={{ fill: "color(display-p3 0.9020 0.4941 0.3725)", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[3px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.21] not-italic relative shrink-0 text-[#c26346] text-[19.2px] text-nowrap tracking-[0.24px] whitespace-pre">280% ROI over 3 years</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Arrow3 />
      <Frame4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#42351f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        For Hospitals
      </p>
      <Frame9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 bg-[#f3ddd6] grow min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0c7ba] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start p-[36px] relative w-full">
          <Impact1 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]" style={{ "--stroke-0": "rgba(82, 163, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p3bd90b80} id="Vector" stroke="var(--stroke-0, #52A395)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.3216 0.6392 0.5843)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]" style={{ "--stroke-0": "rgba(82, 163, 149, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 16">
            <path d={svgPaths.p18f5a1c0} id="Vector" stroke="var(--stroke-0, #52A395)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "color(display-p3 0.3216 0.6392 0.5843)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Impact2() {
  return (
    <div className="bg-[#d9f1ec] box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Impact">
      <Icon5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[165px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#42351f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        For Communities
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic relative shrink-0 text-[#4b3c31] text-[18px] w-full">Jobs, local wealth-building, and tangible health equity improvements for the most vulnerable.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start p-[36px] relative size-full">
          <Impact2 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Solution4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Solution">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[54px] items-start justify-center px-0 py-[54px] relative shrink-0 w-[1280px]" data-name="container">
      <Text1 />
      <Solution4 />
    </div>
  );
}

function Line2() {
  return <div className="bg-[#71c0b2] h-[4px] opacity-80 rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="line" />;
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.078px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#100501] text-[14px] text-nowrap top-0 tracking-[1.4px] uppercase whitespace-pre">Verified Sources</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[7px] h-[20px] items-center relative shrink-0 w-[579px]" data-name="Container">
      <Line2 />
      <Heading2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="text">
      <Container10 />
      <p className="font-['Lora:Medium',sans-serif] font-medium leading-[1.21] min-w-full relative shrink-0 text-[#100501] text-[47.78px] tracking-[0.5972px] w-[min-content]">The Proof</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-[#d4ebd4] grow min-h-px min-w-px relative rounded-[11px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13px] items-baseline p-[16px] relative text-nowrap w-full whitespace-pre">
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.21] relative shrink-0 text-[#336436] text-[47.78px] tracking-[0.5972px]">95%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic relative shrink-0 text-[#457c47] text-[18px]">Adherence Rate</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-[#d4ebd4] grow min-h-px min-w-px relative rounded-[11px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13px] items-baseline p-[16px] relative text-nowrap w-full whitespace-pre">
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.21] relative shrink-0 text-[#336436] text-[47.78px] tracking-[0.5972px]">30%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic relative shrink-0 text-[#457c47] text-[18px]">Fewer Hospitalizations</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[#d4ebd4] grow min-h-px min-w-px relative rounded-[11px] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[13px] items-baseline p-[16px] relative text-nowrap w-full whitespace-pre">
          <p className="font-['Lora:Bold',sans-serif] font-bold leading-[1.21] relative shrink-0 text-[#336436] text-[47.78px] tracking-[0.5972px]">$3.2k</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic relative shrink-0 text-[#457c47] text-[18px]">Savings Per Patient</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[54px] items-center relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full">
      <Text2 />
      <Frame13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[54px] items-start justify-center px-0 py-[54px] relative shrink-0 w-[1280px]" data-name="container">
      <Frame14 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="section">
      <Container4 />
      <Container9 />
      <Container11 />
    </div>
  );
}