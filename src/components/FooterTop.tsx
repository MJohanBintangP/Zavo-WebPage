import iPhoneFooter from '../assets/iPhoneFooter.svg';
import ZavoLogo from '../assets/zavo.svg';

export default function FooterTop() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Rounded Top Layer */}
      <div
        className="absolute inset-0 bg-[#060170]"
        style={{
          borderRadius: '60px 60px 0 0', // Rounded top
        }}
      />

      {/* ClipPath Layer */}
      <div
        className="absolute inset-0 bg-[#060170]"
        style={{
          clipPath: 'polygon(0% 0%, 100% 25%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 h-[500px]">
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-md">
          <div className="flex items-center gap-4">
            <img src={ZavoLogo} alt="Zavo Logo" className="w-6" />
            <p className="text-[#F0F0F0]">Start your career with ZAVO</p>
          </div>

          <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
            Come on, Start Your <br /> Career Today!
          </h1>

          <p className="text-[#C1C1C1] text-sm max-w-xs">Download the ZAVO app now and be the first to know about the latest vacancies.</p>

          <button className="w-fit text-sm bg-white text-black py-2.5 px-5 rounded-full font-medium">Coming Soon</button>
        </div>

        {/* iPhone Image */}
        <div className="hidden md:block absolute right-10 bottom-0 z-20 translate-y-1/2">
          <img src={iPhoneFooter} alt="iPhone Footer" className="w-[250px] lg:w-[300px]" />
        </div>
      </div>
    </div>
  );
}
