import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PartnerProcess from './components/Section2';
import Benefits from './components/Section4';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Banner from './components/Section1';
import PartnershipCards from './components/Section3';
import GetStatedBanner from './components/Section6';
import Questions from './components/Section5';
import { useRef } from 'react';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Adjusts alignment to the top of the viewport
        inline: "nearest", // For horizontal scrolling if needed
      });
    }
  };
  

  return (
    <div className="App">
        <Header 
          onScroll={handleScroll}
          refs={{ homeRef, aboutRef, servicesRef }}
        />
        <div className='pl-20 pr-20'>
          <hr/>
        </div>
        <Banner/>
        <PartnerProcess/>
        <PartnershipCards/>
        <Benefits ref={homeRef}/> 
        <Questions/>
        <GetStatedBanner/>
        <Footer ref={aboutRef}/>

    </div>
  );
}

export default App;
