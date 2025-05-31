import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
// import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';

function App() {
  return (
    <>
      <div className="font-[poppins] overflow-x-hidden relative select-none">
        <div className="bg-[#020118] px-10 md:px-15 lg:px-26 overflow-x-hidden relative">
          <Navbar />
          <HeaderSection />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          {/* <FooterTop /> */}
        </div>

        <FooterBottom />
      </div>
    </>
  );
}

export default App;
