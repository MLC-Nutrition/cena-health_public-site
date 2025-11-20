import svgPaths from "../../imports/svg-im7j7gl716";

function Frame() {
  return (
    <div className="absolute inset-[16.98%_3.18%_17.49%_17.81%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 24">
        <g id="Frame 2">
          <path d={svgPaths.pe847df0} fill="#0D322D" id="Vector" />
          <path d={svgPaths.p7f53700} fill="#0D322D" id="Vector_2" />
          <path d={svgPaths.p15361d00} fill="#0D322D" id="Vector_3" />
          <path d={svgPaths.p146eac80} fill="#0D322D" id="Vector_4" />
          <path d={svgPaths.p344c7300} fill="#3A8478" id="Vector_5" />
          <path d={svgPaths.p37924c00} fill="#3A8478" id="Vector_6" />
          <path d={svgPaths.p3cd1c900} fill="#3A8478" id="Vector_7" />
          <path d={svgPaths.p2ab85300} fill="#3A8478" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p24d8ac80} fill="#3A8478" fillRule="evenodd" id="Vector_9" />
          <path d={svgPaths.p112eaff0} fill="#3A8478" id="Vector_10" />
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
          <path clipRule="evenodd" d={svgPaths.p1e099c00} fill="#3A8478" fillRule="evenodd" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p5a89c00} fill="#52A395" fillRule="evenodd" id="Subtract_2" />
          <path clipRule="evenodd" d={svgPaths.p5e96000} fill="#81B983" fillRule="evenodd" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

export function HeaderLogo() {
  return (
    <div className="h-[36px] relative w-[196px]" aria-label="Cena Health Logo">
      <Frame />
      <Mark />
    </div>
  );
}
