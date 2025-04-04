import { Component } from "react";
import Footer from "../footer/footerComp";
import HeaderComp from "../header/headerComp";
import Main from "../main/mainComp";
import Menu from "../menu/menu";
import ProfileCard from "../UiContent/profile/profileCard";
import Notifications from "../UiContent/notification/notificationCard";
import ProductsCard from "../UiContent/products/productsCard";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // Make the content column-oriented
          justifyContent: "center", // Center vertically
          alignItems: "center", // Center horizontally
          //height: '100vh' // Set the height to 100% of the viewport height
        }}
      >
        {/* <HeaderComp /> */}
        {/* <Main /> */}
        {/* <Footer /> */}
        {/* <Menu name="john" city="hyd" gender="male" /> */}
        {/* <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/> */}
        <ProfileCard name="john" city="Hyd" role="developer" />
        <ProfileCard name="kick" city="Hyd" role="developer" />
        <ProfileCard name="frani" city="Hyd" role="developer" />
        <ProfileCard name="prasu" city="Hyd" role="developer" />
        <Notifications type="liked" name="Sriram" />
        <Notifications type="comment" name="Harish" />
        <Notifications type="share" name="sam" />
        <Notifications type="save" name="kanth" />

        <ProductsCard>
          <h1>mobile</h1>
          <p>iphone16 pro max</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptate incidunt ullam accusantium facere nemo corporis expedita
            est, nisi, laborum asperiores tempora tempore. Voluptatem distinctio
            tempora beatae omnis accusamus maiores.
          </p>
        </ProductsCard>
      </div>
    );
  }
}

export default Home;
