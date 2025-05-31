import ZavoLogo from '../assets/zavo.svg';
import iPhoneHeader from '../assets/iPhoneHeader.svg';

export default function HeaderSection() {
  return (
    <>
      <div className="relative mb-20 md:mb-40 lg:mb-60">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-white text-4xl font-bold leading-12">
            With ZAVO, Finding a Job That
            <br /> <span className="text-[#060170]">Matches Your Skills</span> Has Never Been
            <br /> This Easy - Zero hassle!
          </h1>
          <p className="text-white text-sm">
            A job search application specifically for <br /> those of you who want a job quickly, easily,
            <br /> and according to your skills.
          </p>
          <a href="">
            <button className="text-black cursor-pointer hover:scale-105 transition-transform bg-white py-2 px-6 rounded-xl font-medium items-center">Coming Soon</button>
          </a>
        </div>

        <div className="flex items-center gap-5 mt-20 md:mt-30 lg:mt-40">
          <img src={ZavoLogo} alt="ZavoLogo" className="w-6" />
          <p className="text-white text-sm lg:text-md max-w-[200px] md:max-w-[200px] lg:max-w-[350px]">ZAVO is a solution for job seekers from all backgrounds. It's free, easy to use, and reliable.</p>
        </div>

        <img className="absolute bottom-115 right-2.5 md:right-10 md:top-65 lg:right-20 lg:top-25 z-0 w-[260px] md:w-[400px] lg:w-[600px]" src={iPhoneHeader} alt="iPhoneHeader" />

        <div className="bg-[#060170] w-full rounded-4xl mt-60 md:mt-12 flex flex-col items-center justify-center gap-12 py-12 px-6 md:px-20 relative z-10">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            Why is ZAVO the Best Choice for <br /> Looking for Work?
          </h1>
          <div className="flex flex-col md:flex-row text-white gap-8 md:gap-6 lg:gap-26 text-center">
            <p>
              Find jobs that match <br /> your skills in minutes.
            </p>
            <p>
              Apply directly through the <br /> application, without any hassle.
            </p>
            <p>
              Monitor your application <br /> process in real-time.
            </p>
            <p>
              Get the latest job vacancy <br /> notifications every day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
