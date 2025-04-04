import { Component } from "react";
import Footer from "../footer/footerComp";
import HeaderComp from "../header/headerComp";
import Main from "../main/mainComp";
import Menu from "../menu/menu";
class Home extends Component {
  render() {
    return (
      <div
      style={{ display: 'flex', flexDirection: 'column',
         // Make the content column-oriented 
         justifyContent: 'center', // Center vertically 
         alignItems: 'center', // Center horizontally 
         //height: '100vh' // Set the height to 100% of the viewport height
          }}
      >
        {/* <HeaderComp /> */}
        {/* <Main /> */}
        {/* <Footer /> */}
        {/* <Menu name="john" city="hyd" gender="male" /> */}
      </div>
    );
  }
}

export default Home;


