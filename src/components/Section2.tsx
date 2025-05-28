import iPhoneSection2 from '../assets/iPhoneSection2.svg';
import * as Phospor from '@phosphor-icons/react';

export default function Section2() {
  return (
    <>
      <div className="relative bg-white/8 w-full h-[1250px] md:h-[650px] mb-30 md:mb-40 lg:mb-60 rounded-3xl md:rounded-[50px] overflow-hidden">
        <img className="w-[180px] md:w-[280px] lg:w-[300px] absolute left-1/2 translate-x-[-50%] translate-y-250 md:translate-y-70 lg:translate-y-60" src={iPhoneSection2} alt="iPhoneSection2" />
        <img className="w-[150px] md:w-[280px] lg:w-[300px] absolute -right-2.5 md:-right-15 translate-x-[-50%] -translate-y-60 md:-translate-y-120 lg:-translate-y-130" src={iPhoneSection2} alt="iPhoneSection2" />
        <div className="text-white flex flex-col gap-4 relative left-10 top-30 md:left-12 md:top-20 lg:left-20 lg:top-20">
          <h3 className="text-[10px] md:text-sm">Career Starts from Small Opportunities.</h3>
          <h1 className="font-medium text-2xl md:text-4xl max-w-[200px] md:max-w-[450px]">Find Jobs or Labor Easily and Quickly</h1>
        </div>

        {/* Components Feature / 3 Icon */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 relative left-10 top-40 md:left-12 md:top-45 lg:left-20 lg:top-50">
            <div className="bg-[#060170] p-2.5 rounded-[9px] w-fit">
              <Phospor.FolderIcon size={20} weight="bold" className="text-white" />
            </div>
            <h1 className="text-white text-md md:text-xl font-semibold">Hassle-Free Job Search</h1>
            <p className="text-[12px] md:text-sm text-white max-w-[220px] md:max-w-[300px]">Find daily, weekly, or small project jobs that match your skills. From housemaids, couriers, to builders.</p>
          </div>
          <div className="flex flex-col gap-3 relative left-10 top-50 md:left-92 md:-top-12 lg:left-230 lg:-top-20">
            <div className="bg-[#060170] p-2.5 rounded-[9px] w-fit">
              <Phospor.NoteIcon size={20} weight="bold" className="text-white" />
            </div>
            <h1 className="text-white text-md md:text-xl font-semibold">Post Vacancies Quickly</h1>
            <p className="text-[12px] md:text-sm text-white max-w-[220px] md:max-w-[350px]">Need help? Post a job in minutes and find candidates who are ready to work.</p>
          </div>
          <div className="flex flex-col gap-3 relative left-10 top-60 md:left-92 md:top-12 lg:left-230 lg:top-2">
            <div className="bg-[#060170] p-2.5 rounded-[9px] w-fit">
              <Phospor.UserFocusIcon size={20} weight="bold" className="text-white" />
            </div>
            <h1 className="text-white text-md md:text-xl font-semibold max-w-[200px] md:max-w-100">Verified Profiles and Reviews</h1>
            <p className="text-[12px] md:text-sm text-white max-w-[220px] md:max-w-[300px]">View user profiles and reviews before working together. Safe and transparent for all parties.</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-col lg:flex-row gap-4 text-white font-medium relative translate-x-[50%] md:translate-x-0 top-70 md:left-12 md:-top-15 lg:-top-5 lg:left-20 w-fit">
          <a href="">
            <button className="bg-[#060170] px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform">Coming Soon</button>
          </a>
          <a href="">
            <button className="border px-6 py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform">Learn More</button>
          </a>
        </div>
      </div>
    </>
  );
}
