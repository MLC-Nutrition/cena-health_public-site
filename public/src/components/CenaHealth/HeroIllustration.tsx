import imgImage45 from "figma:asset/1f84006e8d9fd72bfda6907065561432680e30ef.png";
import imgImage42 from "figma:asset/0bf92a14e417ceaf5d6bde1bea019690fe5c8bcb.png";
import imgImage40 from "figma:asset/d8fa78fbb994e7c87fbb312f03ba6d31389268f3.png";
import imgImage41 from "figma:asset/14565ef53f69caecdb61b04a79e0a540ad1372d3.png";
import imgImage44 from "figma:asset/6555dd56394140a03e993ce4b9300e07f829ce94.png";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[650px] aspect-[1.4] mx-auto">
      {/* Image 40 - Hospital Building - Top Left */}
      <div className="absolute left-0 top-0 w-[45%] z-10">
        <div className="relative aspect-square w-full">
          <img alt="Hospital" className="absolute inset-0 w-full h-full object-cover" src={imgImage40} />
        </div>
      </div>

      {/* Image 45 - Arrow Loop Top? - Mid Right */}
      <div className="absolute left-[47.6%] top-[27.4%] w-[23%] z-0">
        <div className="relative aspect-[222/164] w-full overflow-hidden">
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[172.1%] left-[-13.22%] max-w-none top-[-36.37%] w-[126.73%]" src={imgImage45} />
          </div>
        </div>
      </div>

      {/* Image 44 - Icons/Calendar - Bottom Right */}
      <div className="absolute left-[65%] top-[52.3%] w-[34%] z-20">
        <div className="relative aspect-[328/326] w-full overflow-hidden">
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[149.27%] left-[-26.59%] max-w-none top-[-22.89%] w-[147.98%]" src={imgImage44} />
          </div>
        </div>
      </div>

      {/* Image 42 - Arrow Down? - Mid Left */}
      <div className="absolute left-[31.7%] top-[53.7%] w-[17.5%] z-10">
         <div className="relative aspect-[167/94] w-full overflow-hidden">
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[269.47%] left-[-22.69%] max-w-none top-[-82.37%] w-[149.93%]" src={imgImage42} />
          </div>
        </div>
      </div>

       {/* Image 41 - Person? - Bottom Center */}
      <div className="absolute left-[41.1%] top-[68%] w-[21%] z-30">
         <div className="relative aspect-[200/198] w-full flex items-center justify-center">
            {/* The Figma code had some rotation/flipping logic: rotate-[180deg] scale-y-[-100%] which is effectively rotate 180 + flip Y = flip X. */}
             <div className="flex-none w-full h-full rotate-[180deg] scale-y-[-100%]">
                <div className="relative w-full h-full overflow-hidden">
                    <img alt="" className="absolute h-[128.97%] left-[-16.88%] max-w-none top-[-14.48%] w-[128%]" src={imgImage41} />
                </div>
             </div>
         </div>
      </div>

    </div>
  );
}
