import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('style', 'scroll-behavior: smooth');
    return () => {
      document.documentElement.setAttribute('style', 'scroll-behavior: auto');
    };
  }, []);

  return (
    <div className="font-[poppins] bg-[#020118] text-white min-h-screen select-none">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-[280px] md:max-w-[700px] lg:max-w-[1300px] mx-auto pt-35 md:pt-40 lg:pt-50">
        <section id="home" className="scroll-mt-40">
          <HeaderSection />
        </section>
        <section>
          <Section1 />
        </section>
        <section id="feature" className="scroll-mt-40">
          <Section2 />
        </section>
        <section id="benefits" className="scroll-mt-40">
          <Section3 />
        </section>
        <section>
          <Section4 />
        </section>
        <section id="howitworks" className="scroll-mt-40">
          <Section5 />
        </section>
      </main>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
