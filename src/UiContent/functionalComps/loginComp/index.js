// import React, { useState } from "react";
// import MyVerticallyCenteredModal from "./modalComp";

// export default function LoginForm() {
//   const [modalShow, setModalShow] = useState(false);

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     expiresInMins: 30,
//   });

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
// .then((res) => console.log(res));
//     setModalShow(true);
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

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         user={formData.username}
//         password={formData.password}
//         expiresInMins={formData.expiresInMins}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//   );
// }



import React, { useState } from "react";
// import "./index.css";
import MyVerticallyCenteredModal from "./modalComp";

export default function LoginForm() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
  });
  const [res, setResponse] = useState(false);
  const handleInput = (e) => {
    let { name, value, type } = e.target;

    setFormData((a) => {
     
      return {
        ...a,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        res.accessToken ? setResponse(true) : setResponse(false);
        setModalShow(true);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50vw",
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="enter username"
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="enter password"
        />
        <input
          type="number"
          name="expiresInMins"
          value={formData.expiresInMins}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      {res ? (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={formData.username}
        />
      ) : (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user="UnAuthorized user"
        />
      )}
    </div>
  );
}

