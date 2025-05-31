import iPhoneSection4 from '../assets/iPhoneSection4.svg';
import * as Phospor from '@phosphor-icons/react';

export default function Section4() {
  return (
    <>
      <div className="mb-30 md:mb-40 lg:mb-60">
        <div className="px-10 md:px-20 lg:px-0 flex items-center justify-center bg-white/8 w-full h-[700px] md:h-[700px] lg:h-[600px] rounded-3xl md:rounded-[50px] overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <img className="w-[600px] md:w-[500px] lg:w-[700px]" src={iPhoneSection4} alt="iPhoneSection4" />
            <div className="flex flex-col text-white mt-10 lg:mt-0">
              <h1 className="font-semibold text-4xl mb-5">Your Career Solution.</h1>
              <p className="text-[#CDCDCD] max-w-[400px] mb-8">From finding a day job to a long-term project, ZAVO is here to help you grow. No hassle, just sign up and start your first career step now.</p>
              <a href="">
                <button className="flex items-center cursor-pointer text-sm py-1.5 bg-[#060170] rounded-full w-fit">
                  <div className="flex items-center gap-3.5 pr-1.5">
                    <div className="pl-6.5">Coming Soon</div>
                    <div className="cursor-pointer hover:scale-105 transition-transform rounded-full w-10 h-10 bg-white text-black flex items-center justify-center">
                      <Phospor.ArrowUpRightIcon size={20} weight="bold" />
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
