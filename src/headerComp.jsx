import React from "react";

function HeaderComp() {
  return (
    <div style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul style={{ 
        display: "flex", 
        gap: "30px", 
        listStyle: "none", 
        color: "white",
        justifyContent: "center",
        padding: 0
      }}>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Prices</li>
        <li>Login</li>
        <li>Sign Up</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default HeaderComp;




