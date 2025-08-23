import React, { useState } from "react";
import { app } from "../fbconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let route = useNavigate();
  let loginWithFb = getAuth(app);
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loginSuccess = await signInWithEmailAndPassword(
        loginWithFb,
        email,
        pswd
      );

      if(loginSuccess){
    alert("logged in successfully");
      route("/home");
      console.log("login success");

}else{
  alert("user not found in db")
}
      
    } catch (err) {
    console.log(err);
    }
    // console.log(email, pswd);
  };



  return (
    <div>
      Login
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
