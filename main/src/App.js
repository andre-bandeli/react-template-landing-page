
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projetos from './components/projetos/Projetos'
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
     <Navbar/>,
     <Header/>,
     <Slider/>,
     <Projetos/>,
     <About/>,
     <Footer/>
    </div>
  );
}

export default App;
