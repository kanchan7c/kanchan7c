import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const context = (e) => {
    e.preventDefault();
  }

  return (
    <div onContextMenu={context} className="container-fluid">
      <BrowserRouter>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Switch>
          <Route path="/" element={Hero} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
