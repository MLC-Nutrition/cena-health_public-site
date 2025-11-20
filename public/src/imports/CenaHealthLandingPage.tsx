import svgPaths from "./svg-im7j7gl716";
import imgImage45 from "figma:asset/1f84006e8d9fd72bfda6907065561432680e30ef.png";
import imgImage42 from "figma:asset/0bf92a14e417ceaf5d6bde1bea019690fe5c8bcb.png";
import imgImage40 from "figma:asset/d8fa78fbb994e7c87fbb312f03ba6d31389268f3.png";
import imgImage41 from "figma:asset/14565ef53f69caecdb61b04a79e0a540ad1372d3.png";
import imgImage44 from "figma:asset/6555dd56394140a03e993ce4b9300e07f829ce94.png";

function Frame() {
  return (
    <div className="absolute inset-[16.98%_3.18%_17.49%_17.81%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 24">
        <g id="Frame 2">
          <path d={svgPaths.pe847df0} fill="var(--fill-0, #0D322D)" id="Vector" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p7f53700} fill="var(--fill-0, #0D322D)" id="Vector_2" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p15361d00} fill="var(--fill-0, #0D322D)" id="Vector_3" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p146eac80} fill="var(--fill-0, #0D322D)" id="Vector_4" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p344c7300} fill="var(--fill-0, #3A8478)" id="Vector_5" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p37924c00} fill="var(--fill-0, #3A8478)" id="Vector_6" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p3cd1c900} fill="var(--fill-0, #3A8478)" id="Vector_7" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p2ab85300} fill="var(--fill-0, #3A8478)" id="Vector_8" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p24d8ac80} fill="var(--fill-0, #3A8478)" fillRule="evenodd" id="Vector_9" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p112eaff0} fill="var(--fill-0, #3A8478)" id="Vector_10" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Mark() {
  return (
    <div className="absolute inset-[16.77%_84.68%_17.57%_3.01%]" data-name="mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="mark">
          <path clipRule="evenodd" d={svgPaths.p1e099c00} fill="var(--fill-0, #3A8478)" fillRule="evenodd" id="Subtract" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p5a89c00} fill="var(--fill-0, #52A395)" fillRule="evenodd" id="Subtract_2" style={{ fill: "color(display-p3 0.3216 0.6392 0.5843)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p5e96000} fill="var(--fill-0, #81B983)" fillRule="evenodd" id="Subtract_3" style={{ fill: "color(display-p3 0.5059 0.7255 0.5137)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function LogoCenaHealthPatientTeal() {
  return (
    <div className="h-[36px] relative rounded-[3px] shrink-0 w-[196.313px]" data-name="logo / cena health / patient - teal">
      <Frame />
      <Mark />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-[3px] py-0 relative shrink-0" data-name="label wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.21] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f2f2] text-[11.11px] text-nowrap tracking-[0.1389px] whitespace-pre">Schedule a Meeting</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#008871] h-[36px] min-w-[36px] relative rounded-[5px] shrink-0" data-name="button">
      <div className="box-border content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-inherit overflow-clip p-[7px] relative rounded-[inherit]">
        <LabelWrapper />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(16,5,1,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <LogoCenaHealthPatientTeal />
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#eee6db] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d8cec0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Line() {
  return <div className="bg-[#71c0b2] h-[4px] opacity-80 rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="line" />;
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.078px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#100501] text-[14px] text-nowrap top-0 tracking-[1.4px] uppercase whitespace-pre">We allow clinicians to prescribe nutrition</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full" data-name="Container">
      <Line />
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[1.21] relative shrink-0 text-[#100501] text-[0px] text-[47.78px] tracking-[0.5972px] w-full">
        <span>{`Infrastructure that works like `}</span>
        <span className="text-[#e67e5f]">prescriptions</span>. But for nutrition.
      </p>
    </div>
  );
}

function Dot() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.165px]" data-name="dot">
      <div className="absolute bottom-0 left-[-0.41%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="dot">
            <path d={svgPaths.p187f7100} fill="var(--fill-0, #AED6AF)" id="outer" style={{ fill: "color(display-p3 0.6824 0.8392 0.6863)", fillOpacity: "1" }} />
            <path d={svgPaths.p26232500} fill="var(--fill-0, #100501)" id="inner" style={{ fill: "color(display-p3 0.0627 0.0196 0.0039)", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full" data-name="Container">
      <Dot />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#100501] text-[19.2px] tracking-[0.24px]">Reduce readmissions and penalties</p>
    </div>
  );
}

function Dot1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.165px]" data-name="dot">
      <div className="absolute bottom-0 left-[-0.41%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="dot">
            <path d={svgPaths.p187f7100} fill="var(--fill-0, #AED6AF)" id="outer" style={{ fill: "color(display-p3 0.6824 0.8392 0.6863)", fillOpacity: "1" }} />
            <path d={svgPaths.p26232500} fill="var(--fill-0, #100501)" id="inner" style={{ fill: "color(display-p3 0.0627 0.0196 0.0039)", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full" data-name="Container">
      <Dot1 />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#100501] text-[19.2px] tracking-[0.24px]">No new burden on hospital staff</p>
    </div>
  );
}

function Dot2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.165px]" data-name="dot">
      <div className="absolute bottom-0 left-[-0.41%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="dot">
            <path d={svgPaths.p187f7100} fill="var(--fill-0, #AED6AF)" id="outer" style={{ fill: "color(display-p3 0.6824 0.8392 0.6863)", fillOpacity: "1" }} />
            <path d={svgPaths.p26232500} fill="var(--fill-0, #100501)" id="inner" style={{ fill: "color(display-p3 0.0627 0.0196 0.0039)", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full" data-name="Container">
      <Dot2 />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#100501] text-[19.2px] tracking-[0.24px]">Prescribe and monitor tailored nutrition</p>
    </div>
  );
}

function Dot3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.165px]" data-name="dot">
      <div className="absolute bottom-0 left-[-0.41%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="dot">
            <path d={svgPaths.p187f7100} fill="var(--fill-0, #AED6AF)" id="outer" style={{ fill: "color(display-p3 0.6824 0.8392 0.6863)", fillOpacity: "1" }} />
            <path d={svgPaths.p26232500} fill="var(--fill-0, #100501)" id="inner" style={{ fill: "color(display-p3 0.0627 0.0196 0.0039)", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full" data-name="Container">
      <Dot3 />
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[1.21] min-h-px min-w-px not-italic relative shrink-0 text-[#100501] text-[19.2px] tracking-[0.24px]">Improve patient outcomes</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[579px]" data-name="Container">
      <Container1 />
      <Heading1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.21] not-italic relative shrink-0 text-[#9f4b32] text-[19.2px] tracking-[0.24px] w-full">{`When a doctor says "eat better," it shouldn't be a suggestion. It should be a prescription.`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.21] not-italic relative shrink-0 text-[#4b3c31] text-[19.2px] tracking-[0.24px] w-full">We built the missing infrastructure that makes nutrition work as seamlessly as medications. It connects directly to hospital EHRs, works within existing workflows, and bills insurance just like any other treatment.</p>
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] aspect-[222/164] h-[112.14px] ml-[309.9px] mt-[123.58px] relative shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)]" data-name="image 45">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[172.1%] left-[-13.22%] max-w-none top-[-36.37%] w-[126.73%]" src={imgImage45} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] aspect-[167/94] h-[64.275px] ml-[206.64px] mt-[241.88px] relative shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)]" data-name="image 42">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[269.47%] left-[-22.69%] max-w-none top-[-82.37%] w-[149.93%]" src={imgImage42} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] aspect-[430/430] h-[294.026px] ml-0 mt-0 relative shadow-[0px_7px_11px_0px_rgba(16,5,1,0.05),0px_16px_24px_0px_rgba(16,5,1,0.08),0px_24px_36px_0px_rgba(16,5,1,0.11),0px_36px_54px_0px_rgba(16,5,1,0.06)]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
      </div>
      <div className="[grid-area:1_/_1] aspect-[200/198] flex h-[135.389px] items-center justify-center ml-[267.5px] mt-[306.15px] relative">
        <div className="flex-none h-[135.389px] rotate-[180deg] scale-y-[-100%] w-[136.756px]">
          <div className="relative shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)] size-full" data-name="image 41">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[128.97%] left-[-16.88%] max-w-none top-[-14.48%] w-[128%]" src={imgImage41} />
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] aspect-[328/326] h-[222.913px] ml-[422.72px] mt-[235.72px] relative shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)]" data-name="image 44">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.27%] left-[-26.59%] max-w-none top-[-22.89%] w-[147.98%]" src={imgImage44} />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[54px] items-center px-0 py-[54px] relative shrink-0 w-[1280px]">
      <Container6 />
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function FoodAsHealthcare() {
  return (
    <div className="absolute inset-[69.94%_3.18%_11.09%_40.2%]" data-name="food as healthcare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 11">
        <g id="food as healthcare">
          <path d={svgPaths.p20ca600} fill="var(--fill-0, #3A8478)" id="Vector" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p25af0400} fill="var(--fill-0, #3A8478)" id="Vector_2" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p12e6e100} fill="var(--fill-0, #3A8478)" id="Vector_3" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p35b7e400} fill="var(--fill-0, #3A8478)" id="Vector_4" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p1fd3a900} fill="var(--fill-0, #3A8478)" id="Vector_5" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p3d377200} fill="var(--fill-0, #3A8478)" id="Vector_6" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p27128900} fill="var(--fill-0, #3A8478)" id="Vector_7" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p38f9aa00} fill="var(--fill-0, #3A8478)" id="Vector_8" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p3e2a7580} fill="var(--fill-0, #3A8478)" id="Vector_9" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p1e55ce00} fill="var(--fill-0, #3A8478)" id="Vector_10" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p1612b1f0} fill="var(--fill-0, #3A8478)" id="Vector_11" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p9a1e800} fill="var(--fill-0, #3A8478)" id="Vector_12" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p37cd6080} fill="var(--fill-0, #3A8478)" id="Vector_13" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.pc2386c0} fill="var(--fill-0, #3A8478)" id="Vector_14" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.pd91c2c0} fill="var(--fill-0, #3A8478)" id="Vector_15" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p22ae2f40} fill="var(--fill-0, #3A8478)" fillRule="evenodd" id="Vector_16" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[11.08%_3.18%_46.14%_17.81%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 24">
        <g id="Frame 2">
          <path d={svgPaths.pe847df0} fill="var(--fill-0, #0D322D)" id="Vector" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p7f53700} fill="var(--fill-0, #0D322D)" id="Vector_2" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p15361d00} fill="var(--fill-0, #0D322D)" id="Vector_3" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p146eac80} fill="var(--fill-0, #0D322D)" id="Vector_4" style={{ fill: "color(display-p3 0.0510 0.1961 0.1765)", fillOpacity: "1" }} />
          <path d={svgPaths.p344c7300} fill="var(--fill-0, #3A8478)" id="Vector_5" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p37924c00} fill="var(--fill-0, #3A8478)" id="Vector_6" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p3cd1c900} fill="var(--fill-0, #3A8478)" id="Vector_7" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p2ab85300} fill="var(--fill-0, #3A8478)" id="Vector_8" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p24d8ac80} fill="var(--fill-0, #3A8478)" fillRule="evenodd" id="Vector_9" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path d={svgPaths.p112eaff0} fill="var(--fill-0, #3A8478)" id="Vector_10" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Mark1() {
  return (
    <div className="absolute inset-[10.94%_84.68%_46.2%_3.01%]" data-name="mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="mark">
          <path clipRule="evenodd" d={svgPaths.p1e099c00} fill="var(--fill-0, #3A8478)" fillRule="evenodd" id="Subtract" style={{ fill: "color(display-p3 0.2275 0.5176 0.4706)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p5a89c00} fill="var(--fill-0, #52A395)" fillRule="evenodd" id="Subtract_2" style={{ fill: "color(display-p3 0.3216 0.6392 0.5843)", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p5e96000} fill="var(--fill-0, #81B983)" fillRule="evenodd" id="Subtract_3" style={{ fill: "color(display-p3 0.5059 0.7255 0.5137)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function LogoCenaHealthPatientTeal1() {
  return (
    <div className="h-[55.153px] relative rounded-[3px] shrink-0 w-[196.313px]" data-name="logo / cena health / patient - teal">
      <FoodAsHealthcare />
      <Frame2 />
      <Mark1 />
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-[3px] py-0 relative shrink-0" data-name="label wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.21] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f2f2] text-[11.11px] text-nowrap tracking-[0.1389px] whitespace-pre">Schedule a Meeting</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#008871] h-[36px] min-w-[36px] relative rounded-[5px] shrink-0" data-name="button">
      <div className="box-border content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-inherit overflow-clip p-[7px] relative rounded-[inherit]">
        <LabelWrapper1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(16,5,1,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1280px]" data-name="Container">
      <LogoCenaHealthPatientTeal1 />
      <Button1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-center leading-[1.21] not-italic pb-[24px] pt-0 px-0 relative shrink-0 text-center w-[1280px]" data-name="Container">
      <p className="relative shrink-0 text-[#4b3c31] text-[19.2px] tracking-[0.24px] w-full">The only integrated infrastructure platform. Others offer pieces. We connect them all.</p>
      <p className="relative shrink-0 text-[#958579] text-[13.33px] tracking-[0.1666px] w-full">© 2025 Cena Health. All rights reserved.</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#eee6db] box-border content-stretch flex flex-col gap-[24px] items-center justify-center px-0 py-[54px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d8cec0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Container8 />
    </div>
  );
}

export default function CenaHealthLandingPage() {
  return (
    <div className="bg-[#f5eee5] content-stretch flex flex-col items-center relative size-full" data-name="Cena Health Landing Page">
      <Header />
      <Frame4 />
      <Header1 />
    </div>
  );
}