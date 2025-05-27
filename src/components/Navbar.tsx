import { useState } from 'react';
import zavo from '../assets/logo.svg';
import ENlogo from '../assets/enLogo.svg';
import * as Phospor from '@phosphor-icons/react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center py-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-10">
          <div className="flex items-center gap-4">
            <img src={zavo} alt="zavo" className="w-22 sm:w-23 lg:w-24" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:hidden lg:flex  text-sm text-white items-center gap-8 bg-white/5 px-8 py-4 rounded-xl">
            <a className="hover:text-[#473CD1]" href="">
              <li>Home</li>
            </a>
            <a className="hover:text-[#473CD1]" href="">
              <li>Feature</li>
            </a>
            <a className="hover:text-[#473CD1]" href="">
              <li>Vacancy</li>
            </a>
            <a className="hover:text-[#473CD1]" href="">
              <li>Workflow</li>
            </a>
            <a className="hover:text-[#473CD1]" href="">
              <li>About Us</li>
            </a>
          </ul>
        </div>

        <div className="lg:flex gap-8 md:gap-6 lg:gap-8 items-center">
          <div className="text-white flex items-center gap-2">
            <img src={ENlogo} alt="EN Logo" className="w-4 h-4 md:w-5 md:h-5" />
            EN
          </div>
          <a href="" rel="noopener noreferrer">
            <button className="hidden lg:flex cursor-pointer rounded-full bg-[#060170] text-sm text-white px-6 py-3 font-medium">Coming soon</button>
          </a>
        </div>
      </div>
      {/* Hamburger Icon */}
      <button className="lg:hidden pl-8 text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <Phospor.X size={25} weight="bold" /> : <Phospor.List size={25} weight="bold" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="rounded-2xl absolute top-full left-0 w-full bg-[#060170] p-6 flex flex-col gap-4 lg:hidden z-50">
          <ul className="flex flex-col gap-4 text-white text-base">
            <li>Home</li>
            <li>Feature</li>
            <li>Vacancy</li>
            <li>Workflow</li>
            <li>About Us</li>
          </ul>
          <div className="flex items-center justify-between mt-4">
            <button className="rounded-full bg-white text-[#060170] text-sm px-6 py-2 font-medium">Coming soon</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
