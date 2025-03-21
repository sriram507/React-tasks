import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import Home from "./homeComp"; // Import the Home component correctly

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />  {/* Rendering Home component that contains all other components */}
  </React.StrictMode>
);