import * as Phosport from '@phosphor-icons/react';

export default function Section5() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mb-30 md:mb-40 lg:mb-60">
        <div className="flex flex-col text-white gap-6">
          <h1 className="text-5xl font-semibold max-w-[450px]">Find the Right Job, Fast and Easy!</h1>
          <p className="text-sm max-w-[400px]">ZAVO helps you find the right job quickly and easily. Browse thousands of vacancies, apply in seconds, and track your progress — all in one place.</p>
          <button className="hover:scale-105 transition-transform cursor-pointer w-fit bg-[#060170] text-white py-3 px-6 rounded-full">Coming Soon</button>
        </div>
        <div className="flex flex-col items-center gap-10 mt-20 lg:mt-0">
          <div className="hover:scale-105 transition-transform hover:shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] text-white font-medium relative sm:right-0 lg:-right-40 bg-white/8 rounded-3xl flex items-center justify-center gap-6 w-[280px] h-[120px] md:w-[700px] md:h-[140px] lg:w-[450px] lg:h-[140px]">
            <Phosport.BriefcaseIcon size={25} weight="bold" />
            <h1 className="text-md md:text-lg">1000+ Jobs Available</h1>
          </div>
          <div className="hover:scale-105 transition-transform hover:shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] text-white font-medium relative sm:right lg:-right-70 bg-white/8 rounded-3xl flex items-center justify-center gap-6 w-[280px] h-[120px] md:w-[700px] md:h-[140px] lg:w-[450px] lg:h-[140px]">
            <Phosport.BuildingOfficeIcon size={25} weight="bold" />
            <h1 className="text-md md:text-lg max-w-[150px] md:max-w-6xl">Trusted by 300+ Companies</h1>
          </div>
          <div className="hover:scale-105 transition-transform hover:shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] text-white font-medium relative sm:right-0 lg:-right-100 bg-white/8 rounded-3xl flex items-center justify-center gap-6 w-[280px] h-[120px] md:w-[700px] md:h-[140px] lg:w-[450px] lg:h-[140px]">
            <Phosport.HandsClappingIcon size={25} weight="bold" />
            <h1 className="text-md md:text-lg">98% User Satisfaction</h1>
          </div>
        </div>
      </div>
    </>
  );
}
