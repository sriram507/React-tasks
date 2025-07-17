import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Lifecycle from './UiContent/lifeCycle/index';
import Updatingphase from './UiContent/Updatingphase/index';


function App() {
  return (
    <div className="app">
      <Updatingphase />
      {/* <Lifecycle /> */}
      {/* <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact /> */}
    </div>
  );
}

export default App;


