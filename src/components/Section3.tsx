import * as Phospor from '@phosphor-icons/react';

export default function Section3() {
  return (
    <div className="mb-30 md:mb-40 lg:mb-60">
      <div className="flex flex-col gap-15 md:gap-25">
        <div className="flex flex-col text-white gap-6 md:gap-2">
          <h1 className="text-3xl md:text-4xl font-semibold">Why choose us?</h1>
          <p className="text-sm max-w-[400px] text-[#E3E3E3]">Find a fast, easy, and reliable job solution. ZAVO comes with features that make it easier for both sides — job seekers and job providers.</p>
        </div>

        {/* Components/4 Box */}
        <div className="flex flex-wrap flex-col md:flex-row gap-10 md:gap-20 justify-center">
          <div className="bg-white/2 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] py-12 px-10 rounded-3xl flex flex-col text-white gap-6 ">
            <div className="flex items-center gap-4 ">
              <div className="bg-[#060170] p-3 rounded-xl">
                <Phospor.ChatsTeardropIcon size={20} weight="bold" />
              </div>
              <h1 className="font-semibold max-w-[120px]">Live Chat</h1>
            </div>
            <p className="max-w-[180px] text-sm">Instant chat feature between workers and job providers.</p>
          </div>
          <div className="bg-white/2 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] py-12 px-10 rounded-3xl flex flex-col text-white  gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#060170] p-3 rounded-xl">
                <Phospor.ReadCvLogoIcon size={20} weight="bold" />
              </div>
              <h1 className="font-semibold max-w-[120px]">Quick Vacancies</h1>
            </div>
            <p className="max-w-[180px] text-sm">Find daily or weekly jobs without a complicated application process.</p>
          </div>
          <div className="bg-white/2 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] py-12 px-10 rounded-3xl flex flex-col text-white gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#060170] p-3 rounded-xl">
                <Phospor.UserSoundIcon size={20} weight="bold" />
              </div>
              <h1 className="font-semibold max-w-[120px]">Complete Worker Profile</h1>
            </div>
            <p className="max-w-[180px] text-sm">Look at ratings, work history, and skills to ensure the best choice.</p>
          </div>
          <div className="bg-white/2 shadow-[0px_0px_20px_15px_rgba(255,255,255,0.02)] py-12 px-10 rounded-3xl flex flex-col text-white gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#060170] p-3 rounded-xl">
                <Phospor.WalletIcon size={20} weight="bold" />
              </div>
              <h1 className="font-semibold max-w-[120px]">No Additional Fees</h1>
            </div>
            <p className="max-w-[180px] text-sm">There is no cost. ZAVO is free to use for both job seekers and employers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
