import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <>
      <div className="font-[poppins] bg-[#020118] h-screen w-screen px-10 md:px-15 lg:px-26 overflow-x-hidden">
        <Navbar />
        <HeaderSection />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}

export default App;
