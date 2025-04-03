import React from "react";
import HeaderComp from "./headerComp";
import MainComp from "./main/mainComp"; // Import MainComp for the task
import Maincss from "./main/main.css";
import Footer from "./footer/footerComp";

function Home() {
  return (
    <div>
      <HeaderComp />  Navbar/Header at the top
      {/* <MainComp />  Displaying Image in the center */}
      {/* <Maincss /> */}
      <Footer />      Footer at the bottom

    </div>
  );
}

export default Home;





