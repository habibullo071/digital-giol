import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Proekt from './components/proekt/Proekt';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Proekt/>
      </div>
    </div>
  );
}

export default App;
