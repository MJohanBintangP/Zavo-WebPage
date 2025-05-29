import iPhoneFooter from '../assets/iPhoneFooter.svg';
import ZavoLogo from '../assets/zavo.svg';

export default function FooterTop() {
  return (
    <div
      className="relative z-10 w-full h-[500px] bg-[#060170] rounded-t-[60px] overflow-hidden"
      style={{
        clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0% 100%)',
      }}
    >
      <div className="flex items-center justify-between px-20">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <img className="w-6" src={ZavoLogo} alt="ZavoLogo" />
            <p className="text-[#F0F0F0]">Start your career with ZAVO</p>
          </div>

          <h1 className="text-white text-5xl font-semibold leading-tight">
            Come on, Start Your <br /> Career Today!
          </h1>
          <p className="text-[#C1C1C1] text-sm max-w-[300px]">Download the ZAVO app now and be the first to know about the latest vacancies.</p>
          <button className="w-fit text-sm bg-white py-2.5 px-5 rounded-full font-medium items-center">Coming Soon</button>
        </div>

        <img className="absolute -bottom-28 right-16 z-20 w-[300px]" src={iPhoneFooter} alt="iPhoneFooter" />
      </div>
    </div>
  );
}
