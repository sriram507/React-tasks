import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Lifecycle from "./UiContent/lifeCycle/index";
import Updatingphase from "./UiContent/Updatingphase/index";
import FunLifeCycle from "./UiContent/functionalComps/lifecycle/index";
import CounterFc from "./UiContent/functionalComps/counterFc";
import Calculator from "./UiContent/functionalComps/calculator/index";
import FormComp from "./UiContent/functionalComps/formEvents/index";
import PureComponent from "./UiContent/functionalComps/pureComponents/counter";
import UseeffectComp from "./UiContent/functionalComps/useEffect";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./UiContent/functionalComps/Routingcomps/home";
import Pricing from "./UiContent/functionalComps/Routingcomps/pricing";
import AboutUs from "./UiContent/functionalComps/Routingcomps/about";
import PageNotFound from "./UiContent/functionalComps/Routingcomps/pagenotfound";
import ContactUs from "./UiContent/functionalComps/Routingcomps/contact";
import LoginForm from "./UiContent/functionalComps/loginComp";
import Welcome from "./UiContent/functionalComps/Routingcomps/welcome";
import './App.css';
import MovieList from "./UiContent/dynamicrouting/movieList";
import MovieDetails from "./UiContent/dynamicrouting/movieDetails";
import TestUnmount from "./UiContent/hooks/component unmount/TestUnmount";
import UseMemoExample from "./UiContent/hooks/UseMemoExample";
import UseCallbackExample from "./UiContent/hooks/UseCallbackExample";

function App() {
  return (
    <div className="app">
      {/* <UseeffectComp  /> */}
      {/* <LoginForm /> */}
      {/* <PureComponent /> */}
      {/* <FormComp /> */}
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

      {/* <Router>
<nav style={{display:"flex",justifyContent:"space-around"}}>
  <Link to="/home">home</Link>
  <Link to="/ContactUs">ContactUs</Link>
  <Link to="/About">AboutUs</Link>
</nav>

<Routes>
  <Route path="/home" element={<CounterFc />} />
  <Route path="/ContactUs" element={<Calculator />} />
  <Route path="/About" element= {<FormComp />} />
  <Route path="/*" element ={<UseeffectComp  />} />



</Routes>

</Router> */}

      {/* <Router>
        <div
          style={{
            backgroundColor: "orange",
            padding: "15px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link className="Links" to="/home">Home</Link>
          <Link className="Links" to="/contact">ContactUs</Link>
          <Link className="Links" to="/aboutUs">AboutUs</Link>
          <Link className="Links" to="/pricing">Pricing</Link>
          <Link className="Links" to="/login">Login</Link>
        </div>

    <Routes>

    <Route path="*" element={<PageNotFound/>}></Route>
    <Route path="/login" element={<LoginForm/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/Welcome" element={<Welcome/>}></Route>

     </Routes>
      </Router> */}

    {/* <Router>
     <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to ="/home" >Home</Link>
      <Link to ="/movies" >Movies</Link>
      </div>


  <Routes>
  
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/movies" element={<MovieList/>}></Route>
  <Route path="/movies/:id" element={<MovieDetails/>}></Route>

  </Routes>
 

      </Router> */}

    
    {/* <TestUnmount /> */}


{/* <UseMemoExample /> */}

<UseCallbackExample />
    </div>
  

  );
}

export default App;



