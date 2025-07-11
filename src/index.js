import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./home/homeComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css";
import Parent from "./UiContent/Parentcomp/Parentcomp";
import Counter from "./UiContent/Counter/Counter";
import Toggle from "./UiContent/ToggleSwitch/ToggleSwitch";
import Sample from "./UiContent/SampleForm/SampleForm";
import Todo from "./UiContent/Todolist";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   {/* <Todo /> */}
    {/* <Sample /> */}
    {/* <Toggle /> */}
    {/* <Counter /> */}
    <App />
    {/* <Home /> */}
    {/* <Parent login="admin" /> */}
  </React.StrictMode>
);

reportWebVitals();
