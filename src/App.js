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
import FunLifeCycle from './UiContent/functionalComps/lifecycle/index';
import CounterFc from './UiContent/functionalComps/counterFc';
import Calculator from './UiContent/functionalComps/calculator/index';
import FormComp from './UiContent/functionalComps/formEvents/index';


function App() {
  return (
    <div className="app">
    <FormComp />
      {/* <Calculator /> */}
      {/* <CounterFc /> */}
      {/* <FunLifeCycle /> */}
      {/* <Updatingphase /> */}
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


