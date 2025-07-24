import React, {useState} from 'react'
import ButtonComp from '../buttonComp';

export default function CounterFc() {
     const [counter,setCounter]= useState(0)
    //  const increment=()=>{setCounter(counter+1)}
    //  const decrement=()=>{setCounter(counter-1)}
const counterHandler=(action)=>{
    switch(action){
        case "increment":setCounter(counter+1);break;
        case "decrement":setCounter(counter-1);break;
        default : setCounter(0)
    }
}
return (
    <div style={{ textAlign: "center" }}>
       <h1>{counter}</h1> 
       <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>

    <ButtonComp onClick={()=>{counterHandler("increment")}} name="INCREMENT"/>

    <ButtonComp onClick={()=>{counterHandler("decrement")}} name="DECREMENT" />   

    <ButtonComp onClick={()=>{counterHandler()}} name="RESET" /> </div>
        
        </div>
  )
}


