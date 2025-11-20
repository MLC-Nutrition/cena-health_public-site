import { HeaderLogo } from "./HeaderLogo";
import { FooterLogo } from "./FooterLogo";
import { HeroIllustration } from "./HeroIllustration";
import { LogoMarquee } from "./LogoMarquee";
import { SilentCrisisSection } from "./SilentCrisisSection";
import svgPaths from "../../imports/svg-im7j7gl716";
import { Button } from "../ui/button";

function Dot() {
  return (
    <div className="h-5 w-5 relative shrink-0">
      <svg className="block w-full h-full" fill="none" viewBox="0 0 21 20">
        <g id="dot">
          <path d={svgPaths.p187f7100} fill="#AED6AF" id="outer" />
          <path d={svgPaths.p26232500} fill="var(--foreground)" id="inner" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-center w-full">
      <Dot />
      <p className="font-bold text-foreground text-large leading-[1.2] tracking-[0.24px]">{text}</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#f5eee5] min-h-screen w-full text-foreground overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="bg-[#eee6db] w-full border-b border-[#d8cec0] flex justify-center">
        <div className="w-full max-w-[1280px] px-6 py-6 flex items-center justify-between">
          <HeaderLogo />
          <Button asChild>
            <a href="https://calendar.app.google/XZtV4LyJHU2h8U99A" target="_blank" rel="noreferrer">
              Schedule a Meeting
            </a>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center w-full">
        <div className="w-full max-w-[1280px] px-6 py-14 lg:py-20 flex flex-col lg:flex-row items-center gap-14">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-[580px] shrink-0 flex flex-col gap-6 items-start">
            
            {/* Top Label */}
            <div className="flex gap-2 items-center mb-2">
              <div className="bg-[#71c0b2] h-1 w-12 opacity-80 rounded-full" />
              <p className="font-bold text-foreground text-sm uppercase tracking-[1.4px]">
                We allow clinicians to prescribe nutrition
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-semibold text-[48px] leading-[1.2] text-foreground tracking-[0.6px] font-[Lora]">
              Infrastructure that works like <span className="text-[#e67e5f]">prescriptions</span>. But for nutrition.
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-6 mt-2">
              <p className="font-semibold text-[#9f4b32] text-large leading-[1.2] tracking-[0.24px]">
                When a doctor says "eat better," it shouldn't be a suggestion. It should be a prescription.
              </p>
              <p className="text-[#4b3c31] text-large leading-[1.2] tracking-[0.24px]">
                We built the missing infrastructure that makes nutrition work as seamlessly as medications. It connects directly to hospital EHRs, works within existing workflows, and bills insurance just like any other treatment.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 mt-4 w-full">
              <FeatureItem text="Reduce readmissions and penalties" />
              <FeatureItem text="No new burden on hospital staff" />
              <FeatureItem text="Prescribe and monitor tailored nutrition" />
              <FeatureItem text="Improve patient outcomes" />
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="w-full lg:w-auto flex-grow flex justify-center lg:justify-end mt-8 lg:mt-0">
             <HeroIllustration />
          </div>
        </div>

        {/* Logo Marquee */}
        <LogoMarquee />

        {/* Silent Crisis Section */}
        <SilentCrisisSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#eee6db] w-full border-t border-[#d8cec0] py-14 px-6 flex flex-col items-center gap-8">
        <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-6">
          <FooterLogo />
          <Button asChild>
            <a href="https://calendar.app.google/XZtV4LyJHU2h8U99A" target="_blank" rel="noreferrer">
              Schedule a Meeting
            </a>
          </Button>
        </div>
        
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-4 text-center">
          <p className="text-[#4b3c31] text-large tracking-[0.24px]">
            The only integrated infrastructure platform. Others offer pieces. We connect them all.
          </p>
          <p className="text-[#958579] text-[13px] tracking-[0.17px]">
            © 2025 Cena Health. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
