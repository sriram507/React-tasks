import React, { useState } from "react";
import './index.css';
import MyVerticallyCenteredModal from "./modalComp.jsx";

export default function FormComp() {
  // const [user, setUser] = useState("");
  // const [result, setResult] =useState("")
const [modalShow, setModalShow] = React.useState(false);
const [formData, setformData] = useState({
    user: "",
    mob: "",
    email: "",
  })
  const handleInput = (e) => {
    // console.log(e.target.type)
  let {name ,value, type} = e.target;
  setformData((a)=>{
  return{
    ...a,
    [name]:value,
  };
  })
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(formData.user+" "+formData.mob+" "+formData.email)
  setModalShow(true)
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={FormData.user}
          onChange={handleInput}placeholder="enter username"
        />
        <input
          type="text"
          name="mob"
          value={FormData.mob}
          onChange={handleInput}placeholder="enter mobilenumber"
        />
        <input
          type="text"
          name="email"
          value={FormData.email}
          onChange={handleInput}placeholder="enter an email"
        />
        <input type="submit" />
      </form>
     <MyVerticallyCenteredModal
        show={modalShow}
        user={formData.user}
        mob={formData.mob}
        email={formData.email}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
