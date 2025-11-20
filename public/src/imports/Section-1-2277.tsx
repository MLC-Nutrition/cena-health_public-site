function Problem() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Problem">
      <p className="basis-0 font-['Lora:Medium',sans-serif] font-medium grow leading-[1.21] min-h-px min-w-px relative shrink-0 text-[#100501] text-[39.81px] tracking-[0.4976px]">{`Why It's Failing`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#100501] text-[19.2px] text-nowrap top-[-1px] tracking-[0.24px] whitespace-pre">No Prescriptions</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#4b3c31] text-[16px] top-0 tracking-[0.2px] w-[236px]">{`Hospitals can't prescribe ongoing nutrition support like they prescribe medications.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#100501] text-[19.2px] text-nowrap top-[-1px] tracking-[0.24px] whitespace-pre">Siloed Providers</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#4b3c31] text-[16px] top-0 tracking-[0.2px] w-[241px]">Medically-tailored food providers deliver but have no clinical oversight or integration.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading1 />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#100501] text-[19.2px] text-nowrap top-[-1px] tracking-[0.24px] whitespace-pre">Disconnected Dietitians</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#4b3c31] text-[16px] top-0 tracking-[0.2px] w-[236px]">Dietitians counsel patients but have no way to ensure follow-through.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading2 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#100501] text-[19.2px] text-nowrap top-[-1px] tracking-[0.24px] whitespace-pre">Behavioral Gaps</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#4b3c31] text-[16px] top-0 tracking-[0.2px] w-[251px]">{`Therapists address mental barriers but aren't connected to nutrition care.`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading3 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#100501] text-[19.2px] text-nowrap top-[-1px] tracking-[0.24px] whitespace-pre">Limited Platforms</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#4b3c31] text-[16px] top-0 tracking-[0.2px] w-[222px]">{`Care coordination platforms track patients but don't include food delivery.`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:2_/_2] bg-white relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d8cec0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading4 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.21] left-0 not-italic text-[#e7886b] text-[19.2px] text-nowrap top-[-1px] tracking-[0.24px] whitespace-pre">The Core Problem</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.21] left-0 not-italic text-[#f5eee5] text-[16px] top-0 tracking-[0.2px] w-[253px]">No cohesive infrastructure connecting delivery + clinical + behavioral + workflows.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:2_/_3] bg-[#42351f] relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#42351f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading5 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Problem1() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[324.5px] relative shrink-0 w-full" data-name="Problem">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-0 py-[54px] relative shrink-0 w-[1280px]">
      <Problem />
      <Problem1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="section">
      <Frame />
    </div>
  );
}