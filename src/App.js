import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container-fluid">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
