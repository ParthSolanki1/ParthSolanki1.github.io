import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Myprojects from './components/Myprojects/Myprojects';
import Navbar from "./components/Navbar/Navbar"
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HomePage/>
        <About/>
        <Skills/>
        <Experience/>
        <Myprojects/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
