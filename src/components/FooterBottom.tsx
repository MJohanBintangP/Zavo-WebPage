import type { FC } from 'react';
import * as Phosphor from '@phosphor-icons/react';
import ZavoLogo from '../assets/logo.svg';

const FooterBottom: FC = () => {
  return (
    <footer className="bg-black px-10 md:px-12 lg:px-20 pt-16 text-white ">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-25 mb-16 ">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 max-w-xs">
          <img className="w-32" src={ZavoLogo} alt="Zavo Logo" />
          <p className="text-md">🚀 Join thousands of others on their journey to a dream career!</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
          <FooterColumn title="About Us" links={['About ZAVO', 'Our Vision & Mission', 'Meet the Team', 'Testimonials']} />
          <FooterColumn title="Services" links={['Explore Careers', 'Career Counseling', 'Online Courses', 'Soft Skills Training']} />
          <FooterColumn title="Support" links={['How It Works', 'Help Center', 'Mobile App']} />
          <FooterColumn title="Community" links={['Discussion Forum', 'Events & Webinars', 'Blog & Insights', 'Referral Program']} />
        </div>
      </div>

      {/* Social & Location */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 text-sm text-[#A5A5A5]">
        <div className="flex items-center gap-4">
          <span>Follow us</span>
          <Phosphor.YoutubeLogoIcon size={24} className="text-white hover:text-blue-500 cursor-pointer" />
          <Phosphor.LinkedinLogoIcon size={24} className="text-white hover:text-blue-500 cursor-pointer" />
          <Phosphor.TwitterLogoIcon size={24} className="text-white hover:text-blue-500 cursor-pointer" />
        </div>
        <a href="" className="hover:underline">
          Location: Surabaya, Indonesia
        </a>
      </div>

      <hr className="border-white/30" />

      {/* Footer Bottom Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-[#A5A5A5] gap-2 py-6">
        <p>© 2023 ZAVO. All rights reserved.</p>
        <div className="flex gap-3 md:gap-4">
          <a href="" className="hover:underline">
            Privacy Policy
          </a>
          <a href="" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-[#A5A5A5] font-semibold">{title}</h2>
    {links.map((link, idx) => (
      <a key={idx} href="" className="hover:underline">
        {link}
      </a>
    ))}
  </div>
);

export default FooterBottom;
