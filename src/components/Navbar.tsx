import { useState, useEffect } from 'react';
import zavo from '../assets/logo.svg';
import ENlogo from '../assets/enLogo.svg';
import * as Phospor from '@phosphor-icons/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-[#020118]' : 'bg-transparent'}`}>
        <div className="max-w-[280px] md:max-w-[700px] lg:max-w-[1300px] container mx-auto flex items-center justify-between py-8 md:py-6 lg:py-10">
          <div className="flex gap-10">
            <div className="flex items-center gap-4">
              <img src={zavo} alt="zavo" className="w-22 sm:w-23 lg:w-24" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex text-sm text-white items-center gap-8 bg-white/5 px-8 py-4 rounded-xl">
              <button onClick={() => scrollToSection('home')}>
                <li className="hover:text-[#473CD1] cursor-pointer">Home</li>
              </button>
              <button onClick={() => scrollToSection('feature')}>
                <li className="hover:text-[#473CD1] cursor-pointer">Feature</li>
              </button>
              <button onClick={() => scrollToSection('benefits')}>
                <li className="hover:text-[#473CD1] cursor-pointer">Benefits</li>
              </button>
              <button onClick={() => scrollToSection('howitworks')}>
                <li className="hover:text-[#473CD1] cursor-pointer">How It Works</li>
              </button>
              <button onClick={() => scrollToSection('footer')}>
                <li className="hover:text-[#473CD1] cursor-pointer">About Us</li>
              </button>
            </ul>
          </div>

          <div className="flex items-center">
            <div className="flex items-center gap-4 lg:hidden">
              <div className="text-white flex items-center gap-2">
                <img src={ENlogo} alt="EN Logo" className="w-4 h-4 md:w-5 md:h-5" />
                EN
              </div>
              <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <Phospor.X size={25} weight="bold" /> : <Phospor.ListIcon size={25} weight="bold" />}
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <div className="text-white flex items-center gap-2">
                <img src={ENlogo} alt="EN Logo" className="w-4 h-4 md:w-5 md:h-5" />
                EN
              </div>
              <button className="cursor-pointer hover:scale-105 transition-transform rounded-full bg-[#060170] text-sm text-white px-6 py-3 font-medium">Coming soon</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="pb-10 px-10 md:px-15">
            <div className="rounded-2xl mt-2 w-full bg-[#060170] p-6 flex flex-col gap-4 lg:hidden z-50">
              <ul className="flex flex-col gap-4 text-white text-base">
                <li onClick={() => scrollToSection('home')} className="cursor-pointer">
                  Home
                </li>
                <li onClick={() => scrollToSection('feature')} className="cursor-pointer">
                  Feature
                </li>
                <li onClick={() => scrollToSection('benefits')} className="cursor-pointer">
                  Benefits
                </li>
                <li onClick={() => scrollToSection('howitworks')} className="cursor-pointer">
                  How It Works
                </li>
                <li onClick={() => scrollToSection('footer')} className="cursor-pointer">
                  About Us
                </li>
              </ul>
              <div className="flex items-center justify-between mt-4">
                <button className="rounded-full bg-white text-[#060170] text-sm px-6 py-2 font-medium">Coming soon</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
