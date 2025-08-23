import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, getAuth,signInwithEmailAndPassword} from "firebase/auth"
import {app}  from "../fbconfig" 

const Signup = () => {
  const signUpDoneWithFb=getAuth()
 const route=useNavigate()
  const [email, setEmail]=useState("")
  const [pswd, setPswd]=useState("")



  const handleSubmit =async (e) => {
    e.preventDefault();
  
    try {
      let a=await createUserWithEmailAndPassword(signUpDoneWithFb,email,pswd)
      alert("signup done successfully");
      console.log(a);
      
    } catch (err) {
      console.log(err);
      
    }

    // console.log(email,pswd);
    route("/login")
    setEmail("")
        setPswd("")
    
  }
  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="enter password here"
          onChange={(e) => setPswd(e.target.value)}
          value={pswd}
        />
        <button>signup</button>
      </form>
    </div>
  );
};

export default Signup;
