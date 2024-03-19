import './App.css';
import HeaderComp from './Components/Header/HeaderComp';
import BannerComp from './Components/Banner/BannerComp';
import StretegyComp from './Components/Stretegy/StretegyComp';
import ClientsComp from './Components/Clients/ClientsComp';
import KeepTrackComp from './Components/KeepTrack/KeepTrackComp';
import FooterComp from './Components/Footer/FooterComp';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <BannerComp/>
      <StretegyComp/>
      <ClientsComp/>
      <KeepTrackComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
