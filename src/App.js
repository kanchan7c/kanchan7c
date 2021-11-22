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
        <Switch>
          <Route path="/" element={Hero} exact> <Hero /> </Route>
          <Route path="/about" element={About} exact> <About /> </Route>
          <Route path="/projects" element={Projects} exact><Projects /> </Route>
          <Route path="/TechStack" element={TechStack} exact><TechStack /> </Route>
          <Route path="/contact" element={Contact} exact> <Contact /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
