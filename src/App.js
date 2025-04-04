import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Portfolio from './Portfolio/Porfolio';



function App() {
  return (
    <div className="app">
      {/* <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact /> */}
      <Portfolio />
    </div>
  );
}

export default App;


