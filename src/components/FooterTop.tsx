import iPhoneFooter from '../assets/iPhoneFooter.svg';
import Zavo from '../assets/zavo.svg';

export default function FooterTop() {
  return (
    <div className="bg-cover bg-center px-20 overflow-hidden" style={{ backgroundImage: 'url(/FooterTopBg.svg)' }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex text-white items-center gap-4">
            <img className="w-6" src={Zavo} alt="Zavo" />
            <p>Start your career with ZAVO</p>
          </div>
          <h1 className="text-white text-5xl font-medium max-w-[600px]">Come on, Start Your Career Today !</h1>
          <p className="text-[#C1C1C1] text-sm max-w-[300px]">Download the ZAVO app now and be the first to know about the latest vacancies.</p>
          <button className="w-fit bg-black text-white py-3 px-4 rounded-full">Coming Soon</button>
        </div>
        <img className="relative translate-y-[20%] w-80" src={iPhoneFooter} alt="iPhoneFooter" />
      </div>
    </div>
  );
}
