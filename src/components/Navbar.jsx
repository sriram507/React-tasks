import React from "react";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Prices</li>
        <li>Login</li>
        <li>Signup</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
