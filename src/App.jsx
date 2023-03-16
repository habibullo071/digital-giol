import './App.css';
import Footer from './components/footer/Footer';
import List from './components/list/List';
import Map from './components/map/Map';
import Naprav from './components/naprav/Naprav';
import Navbar from './components/navbar/Navbar';
import Proekt from './components/proekt/Proekt';
import Registr from './components/registr/Registr';
import Result from './components/result/Result';
import Zadachi from './components/Zadachi/Zadachi';
function App() {
  return (
    <div className="App">
      <div className="contaner">
        <Navbar />
        <Proekt/>
        <Naprav/>
        <List/>
        <Zadachi/>
        <Registr/>
        <Result/>
        <Map/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
