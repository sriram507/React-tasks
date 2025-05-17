import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home/homeComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './UiContent/Parentcomp/Parentcomp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <Parent login="admin" />
  </React.StrictMode>
);

reportWebVitals();




