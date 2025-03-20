import React from "react";
import Display from "./assets/images/Beautiful-lake-world-gallery-1920x1080-wallpapers.jpg"; 

function MainComp() {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <img 
        src={Display} 
        alt="Display view" 
        style={{ width: "500px", height: "300px", border: "2px solid red" }} 
      />
    </div>
  );
}

export default MainComp;
