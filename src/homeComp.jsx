import React from "react";
import HeaderComp from "./headerComp";
import Footer from "./footerComp";
import MainComp from "./mainComp"; // Import MainComp for the image

function Home() {
  return (
    <div>
      <HeaderComp />  {/* Navbar/Header at the top */}
      <MainComp />    {/* Displaying Image in the center */}
      <Footer />      {/* Footer at the bottom */}
    </div>
  );
}

export default Home;



