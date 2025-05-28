import iPhoneSection1 from '../assets/iPhoneSection1.svg';
import * as Phospor from '@phosphor-icons/react';

export default function Section1() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mb-30 md:mb-60 gap-30 items-center justify-center">
        <div className="bg-white/2 w-[270px] h-[330px] md:w-[550px] md:h-[400px] rounded-3xl shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)]">
          <div className="flex flex-col relative top-4 left-4 md:top-8 md:left-8">
            <div className="flex gap-3 md:gap-6 items-center mb-3">
              <div className="rounded-xl md:rounded-lg bg-[#060170] p-3">
                <Phospor.GitBranchIcon size={20} weight="bold" className="text-white" />
              </div>
              <h1 className="text-white font-semibold text-[12px] md:text-md">
                Commit your <br /> career !
              </h1>
            </div>
            <p className="text-[#D9D9D9] text-[12px] md:text-[12px]">
              Build a better future with <br /> small steps today
            </p>
          </div>
          <img className="relative w-[500px] -right-1 -top-8 md:-right-13 md:-top-25" src={iPhoneSection1} alt="iPhoneSection1" />
          <p className="text-[#D9D9D9] text-[12px] md:text-[12px] relative -top-10 -right-10 md:-top-40 md:-right-70">
            A successful career starts with <br /> commitment.{' '}
          </p>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-[#BCBCBC] mb-2">One App, Thousands of Opportunities</h3>
          <h1 className="font-bold text-4xl text-white mb-6">
            Vacancies Always <br /> Updated, Every Day
          </h1>
          <p className="text-white max-w-[500px] text-sm mb-8">
            ZAVO is designed for those who need a quick solution. We know how hard it is to find a job, especially when you have limited time. That's why we have introduced the “Daily Job Update” feature that shows you the latest jobs based
            on your location, field, and expertise.
          </p>
          <a href="">
            <button className="font-medium rounded-xl bg-[#060170] text-white px-5 py-3 w-fit cursor-pointer hover:scale-105 transition-transform text-sm">Coming Soon</button>
          </a>
        </div>
      </div>
    </>
  );
}
