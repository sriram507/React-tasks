import React, { useEffect, useState } from "react";
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
import Home from "./UiContent/functionalComps/Routingcomps/home";
import Pricing from "./UiContent/functionalComps/Routingcomps/pricing";
import AboutUs from "./UiContent/functionalComps/Routingcomps/about";
import PageNotFound from "./UiContent/functionalComps/Routingcomps/pagenotfound";
import ContactUs from "./UiContent/functionalComps/Routingcomps/contact";
import LoginForm from "./UiContent/functionalComps/loginComp";
import Welcome from "./UiContent/functionalComps/Routingcomps/welcome";
import MovieList from "./UiContent/dynamicrouting/movieList";
import MovieDetails from "./UiContent/dynamicrouting/movieDetails";
import TestUnmount from "./UiContent/hooks/component unmount/TestUnmount";
import UseMemoExample from "./UiContent/hooks/UseMemoExample";
import UseCallbackExample from "./UiContent/hooks/UseCallbackExample";
import ParentComp from "./UiContent/contexthook/parentComp";

import Signup from "./firebase authentication/signup/signup";
import Login from "./firebase authentication/login/login";
import Homepage from "./firebase authentication/home/home";
import { app } from "./firebase authentication/fbconfig";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./App.css";

const App = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Firebase Auth Routes */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Example extra routes (uncomment if you want to use them) */}
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        {/* <Route path="/welcome" element={<Welcome />} /> */}
        {/* <Route path="/movies" element={<MovieList />} /> */}
        {/* <Route path="/movies/:id" element={<MovieDetails />} /> */}

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;






// old code


// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Education from "./components/Education";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import Lifecycle from "./UiContent/lifeCycle/index";
// import Updatingphase from "./UiContent/Updatingphase/index";
// import FunLifeCycle from "./UiContent/functionalComps/lifecycle/index";
// import CounterFc from "./UiContent/functionalComps/counterFc";
// import Calculator from "./UiContent/functionalComps/calculator/index";
// import FormComp from "./UiContent/functionalComps/formEvents/index";
// import PureComponent from "./UiContent/functionalComps/pureComponents/counter";
// import UseeffectComp from "./UiContent/functionalComps/useEffect";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./UiContent/functionalComps/Routingcomps/home";
// import Pricing from "./UiContent/functionalComps/Routingcomps/pricing";
// import AboutUs from "./UiContent/functionalComps/Routingcomps/about";
// import PageNotFound from "./UiContent/functionalComps/Routingcomps/pagenotfound";
// import ContactUs from "./UiContent/functionalComps/Routingcomps/contact";
// import LoginForm from "./UiContent/functionalComps/loginComp";
// import Welcome from "./UiContent/functionalComps/Routingcomps/welcome";
// import "./App.css";
// import MovieList from "./UiContent/dynamicrouting/movieList";
// import MovieDetails from "./UiContent/dynamicrouting/movieDetails";
// import TestUnmount from "./UiContent/hooks/component unmount/TestUnmount";
// import UseMemoExample from "./UiContent/hooks/UseMemoExample";
// import UseCallbackExample from "./UiContent/hooks/UseCallbackExample";
// import ParentComp from "./UiContent/contexthook/parentComp";
// import Signup from "./firebase authentication/signup/signup";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./firebase authentication/login/login";
// import Homepage from "./firebase authentication/home/home";
// import { app } from "./firebase authentication/fbconfig";
// import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

// const App = () => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

  // ✅ logout function
  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     setUser(null);
  //   } catch (err) {
  //     console.error("Logout error:", err);
  //   }
  // };

  // return (
  //   <>
      {/* You can uncomment whichever UI block you want to test */}

      {/* <UseeffectComp /> */}
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

      {/* Example Router (commented) */}
      {/* <Router>
        <nav style={{display:"flex",justifyContent:"space-around"}}>
          <Link to="/home">home</Link>
          <Link to="/ContactUs">ContactUs</Link>
          <Link to="/About">AboutUs</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<CounterFc />} />
          <Route path="/ContactUs" element={<Calculator />} />
          <Route path="/About" element={<FormComp />} />
          <Route path="/*" element={<UseeffectComp />} />
        </Routes>
      </Router> */}

      {/* Example Router with Links (commented) */}
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
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Welcome" element={<Welcome />} />
        </Routes>
      </Router> */}

      {/* Example Router with Dynamic Routes (commented) */}
      {/* <Router>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router> */}

      {/* <TestUnmount /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <ParentComp /> */}

      {/* 🔹 Active Firebase Auth Routes */}
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/home" element={<Homepage user={user} onLogout={handleLogout} />} />
      //     <Route path="/signup" element={<Signup />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="*" element={<h1>404 Page Not Found</h1>} />
      //   </Routes>
      // </BrowserRouter>
//     </>
//   );
// };

// export default App;


