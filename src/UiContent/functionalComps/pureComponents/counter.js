import React, { useState } from 'react'
import Display from './display';

export default function Counter() {

    const[value,setValue]=useState(0);
    const[random,setRandom]=useState(0);


    const handIncrement = () => {setValue(value+1)}
    const handRandom = () => {setRandom(Math.random())}


  return (
    <div>
        <button onClick={handIncrement}>increment</button>
        <button onClick={handRandom}>clickhere</button>
       <h1>{random}</h1>
        {/* <h1>{value}</h1> */}
        <Display value={value}/>
        </div>
  )
}
