import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';

function App() {
  return (
    <>
      <div className="bg-[#020118] h-screen w-screen px-10 md:px-15 lg:px-26 overflow-x-hidden">
        <Navbar />
        <HeaderSection />
      </div>
    </>
  );
}

export default App;
