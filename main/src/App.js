
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Portfolio from "./components/portfolio/Portfolio"
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Slider/>
     <Portfolio/>
     <About/>
    </div>
  );
}

export default App;
