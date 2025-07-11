// This is a simple React class component demonstrating Mounting Phase lifecycle methods.
// It logs lifecycle activity to the console.
// It's a good starting point for understanding how class-based components work.

// import React, { Component } from 'react';

// export default class LifeCycle extends Component {

//   constructor() {
//     super();
//     console.log("Constructing");
//     this.state = {};
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("State deriving from props");
//     return null;
//   }

//   componentDidMount() {
//     console.log("Mounting");
//   }

//   render() {
//     console.log("Rendering");
//     return (
//       <div>LifeCycle</div>
//     )
//   }
// }









// fetch

// import React, { Component } from "react";
// import ProfileCard from "../profile/profileCard";
// import Spinner from "react-bootstrap/Spinner";

// export default class Index extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Constructing");
//     this.state = { products: [], loading: true };
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("State deriving from props");
//     return null;
//   }

//   componentDidMount() {
//     console.log("Mounting");

//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ products: json, loading: false });
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         this.setState({ loading: false }); // ✅ Fixed typo: setstate → setState
//       });
//   }

//   render() {
//     const { products, loading } = this.state;

//     if (loading) {
//       return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//           <Spinner animation="border" role="status" />
//           <div>Loading...</div>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px",
//             flexWrap: "wrap",
//           }}
//         >
//           {products.map((product, index) => (
//             <ProfileCard
//               key={index}
//               img={product.image}
//               title={product.title}
//               desc={product.description}
//               info={product.category}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }





// Axios

import React, { Component } from "react";
import ProfileCard from "../profile/profileCard";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export default class Index extends Component {
  constructor(props) {
    super(props);
    console.log("Constructing");
    this.state = { products: [], loading: true };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("State deriving from props");
    return null;
  }

  componentDidMount() {
    console.log("Mounting");

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ products: res.data, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { products, loading } = this.state;

    if (loading) {
      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spinner animation="border" role="status" />
          <div>Loading...</div>
        </div>
      );
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {products.map((a, b) => (
            <ProfileCard
              key={b}
              img={a.image}
              title={a.title}
              desc={a.description}
              info={a.category}
            />
          ))}
        </div>
      </div>
    );
  }
}

