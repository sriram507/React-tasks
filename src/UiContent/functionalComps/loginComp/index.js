// import React, { useState } from "react";
// import MyVerticallyCenteredModal from "./modalComp";

// export default function LoginForm() {
//   const [modalShow, setModalShow] = useState(false);

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     expiresInMins: 30,
//   });


//   const[res,setResponse]=useState(false);
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('https://dummyjson.com/auth/login', {
      
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(formData),
// })
// .then((res) => res.json())
// .then((res) => { 
//   res.accessToken ? setResponse(true) : setResponse(false);
//     setModalShow(true);
//   });
//   };
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", width: "50vw" }}
//       >
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleInput}
//           placeholder="Enter username"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInput}
//           placeholder="Enter password"
//         />
//         <input
//           type="number"
//           name="expiresInMins"
//           value={formData.expiresInMins}
//           onChange={handleInput}
//           placeholder="Expires in minutes"
//         />
//         <input type="submit" />
//       </form>

//       {res? <MyVerticallyCenteredModal
//         show={modalShow}
//          onHide={() => setModalShow(false)}
//         user={formData.username}
//         />: 
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         user="UnAuthorized Uesr" />} 

//     </div>
//   );
// }



import React, { useState } from "react";
import MyVerticallyCenteredModal from "./modalComp";
import axios from "axios";

export default function LoginForm() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
  });

  const [res, setResponse] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Support both 'token' and 'accessToken'
      const token = response.data?.token || response.data?.accessToken;
      setResponse(!!token);
    } catch (error) {
      console.error("Login failed:", error);
      setResponse(false);
    } finally {
      setModalShow(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "50vw" }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Enter username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Enter password"
        />
        <input
          type="number"
          name="expiresInMins"
          value={formData.expiresInMins}
          onChange={handleInput}
          placeholder="Expires in minutes"
        />
        <input type="submit" value="Login" />
      </form>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={res ? formData.username : "Unauthorized User"}
      />
    </div>
  );
}


