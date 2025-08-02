import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UseeffectComp() {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("hi");
  const [display, setDisplay] = useState("a");

  const handleMessage = () => {
    setMessage((prev) => prev + "10k");
  };

useEffect(() => { 
  axios.get("https://fakestoreapi.in/api/products")
    .then((res) => {
      const firstProductTitle = res.data.products[0]?.title || "No title found";
      setDisplay((prev) => prev + firstProductTitle);
      console.log("First product title:", firstProductTitle);
    })
    .catch((err) => {
      console.error("API Error:", err);
    });
}, []);


  return (
    <div>
      <h1>value: {value}</h1>
      <h1>message: {message}</h1>
      <h1>display: {display}</h1>
      <button onClick={handleMessage}>click me</button>
      <button>display</button>
    </div>
  );
}
