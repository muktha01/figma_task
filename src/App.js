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

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='pl-20 pr-20'>
          <hr/>
        </div>
        <Banner/>
        <PartnerProcess/>
        <PartnershipCards/>
        <Benefits/> 
        <Questions/>
        <GetStatedBanner/>
        <Footer/>

    </div>
  );
}

export default App;
