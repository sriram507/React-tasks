import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "../profile/profileCard";
import Loadspinner from "../utilities/Loadspinner";

export default class Updatingphase extends Component {
  constructor() {
    super();
    this.state = { count: 0, product: null };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count value updated by ${this.state.count}`);

      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          // Only update product if it's different from current one
          if (!this.state.product || this.state.product.id !== res.data.id) {
            this.setState({ product: res.data }, () => {
              console.log("Product updated:", this.state.product);
            });
          }
        })
        .catch((err) => {
          console.error("API Error:", err);
          this.setState({ product: null });
        });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count <= 10;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState, "snapshot");
    return null;
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: Math.max(prevState.count - 1, 0) }));
  };

  render() {
  const { count, product } = this.state;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      
      {/* Center this div */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <h1>{count}</h1>
        <div>
          <button onClick={this.increment}>Next</button>
          <button onClick={this.decrement} disabled={count <= 0}>
            prevs
          </button>
        </div>
      </div>

      {/* Product / Spinner Section */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!product ? (
          <Loadspinner />
        ) : (
          <ProfileCard
            img={product.image}
            title={product.title}
            desc={product.description}
            info={product.category}
          />
        )}
      </div>

    </div>
  );
}

}






// import React, { Component } from "react";
// import axios from "axios";
// import ProfileCard from "../profile/profileCard";
// import Loadspinner from "../utilities/Loadspinner";

// export default class Updatingphase extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1, // start from 1 because API uses 1-based indexing
//       product: null,
//       page: 1, // for paginated buttons
//     };
//   }

//   componentDidMount() {
//     this.fetchProduct(this.state.count);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       this.fetchProduct(this.state.count);
//     }
//   }

//   fetchProduct = (id) => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => {
//         this.setState({ product: res.data });
//       })
//       .catch((err) => {
//         console.error("API Error:", err);
//         this.setState({ product: null });
//       });
//   };

//   handleNumberClick = (num) => {
//     this.setState({ count: num });
//   };

//   handleNextPage = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };

//   handlePrevPage = () => {
//     this.setState((prevState) => ({
//       page: Math.max(prevState.page - 1, 1),
//     }));
//   };

//   render() {
//     const { count, product, page } = this.state;
//     const itemsPerPage = 9;
//     const start = (page - 1) * itemsPerPage + 1;
//     const end = start + itemsPerPage - 1;
//     const totalProducts = 20; // adjust if needed

//     const buttonArray = [];
//     for (let i = start; i <= end && i <= totalProducts; i++) {
//       buttonArray.push(i);
//     }

//     return (
//       <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

//         {/* Product Display */}
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           {!product ? (
//             <Loadspinner />
//           ) : (
//             <ProfileCard
//               img={product.image}
//               title={product.title}
//               desc={product.description}
//               info={product.category}
//             />
//           )}
//         </div>

//         {/* Numbered Buttons */}
//         <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
//           {buttonArray.map((num) => (
//             <button
//               key={num}
//               onClick={() => this.handleNumberClick(num)}
//               style={{
//                 padding: "6px 12px",
//                 backgroundColor: num === count ? "gray" : "#f0f0f0",
//                 border: "1px solid #ccc",
//                 cursor: "pointer",
//               }}
//             >
//               {num}
//             </button>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button onClick={this.handlePrevPage} disabled={page === 1}>
//             Prev
//           </button>
//           <button
//             onClick={this.handleNextPage}
//             disabled={end >= totalProducts}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }





// Here's a clear explanation of each part of your code step-by-step:

// ---

// ### 🔹 **Imports**

// ```js
// import React, { Component } from "react";
// import axios from "axios";
// import ProfileCard from "../profile/profileCard";
// import Loadspinner from "../utilities/Loadspinner";
// ```

// * `React` and `Component` are needed to create a class component.
// * `axios` is used to make HTTP requests.
// * `ProfileCard` is a reusable component that displays product data.
// * `Loadspinner` shows a loading indicator while data is being fetched.

// ---

// ### 🔹 **Component: Updatingphase**

// ```js
// export default class Updatingphase extends Component {
// ```

// Defines a class component named `Updatingphase`.

// ---

// ### 🔹 **State Initialization**

// ```js
// constructor() {
//   super();
//   this.state = {
//     count: 1, // Start from product ID 1
//     product: null, // Product data
//     page: 1, // Current page of number buttons
//   };
// }
// ```

// * `count`: The selected product ID.
// * `product`: Holds product details fetched from the API.
// * `page`: Controls which numbered buttons (1–9, 10–18...) are shown.

// ---

// ### 🔹 **componentDidMount**

// ```js
// componentDidMount() {
//   this.fetchProduct(this.state.count);
// }
// ```

// Called once when the component mounts — it fetches the initial product.

// ---

// ### 🔹 **componentDidUpdate**

// ```js
// componentDidUpdate(prevProps, prevState) {
//   if (prevState.count !== this.state.count) {
//     this.fetchProduct(this.state.count);
//   }
// }
// ```

// Whenever `count` changes, it fetches the corresponding product.

// ---

// ### 🔹 **fetchProduct Method**

// ```js
// fetchProduct = (id) => {
//   axios
//     .get(`https://fakestoreapi.com/products/${id}`)
//     .then((res) => {
//       this.setState({ product: res.data });
//     })
//     .catch((err) => {
//       console.error("API Error:", err);
//       this.setState({ product: null });
//     });
// };
// ```

// Makes a GET request to the Fake Store API to fetch product data by ID.

// ---

// ### 🔹 **Button Handlers**

// ```js
// handleNumberClick = (num) => {
//   this.setState({ count: num });
// };
// ```

// Updates `count` when a number button is clicked.

// ```js
// handleNextPage = () => {
//   this.setState((prevState) => ({ page: prevState.page + 1 }));
// };

// handlePrevPage = () => {
//   this.setState((prevState) => ({
//     page: Math.max(prevState.page - 1, 1),
//   }));
// };
// ```

// * `handleNextPage`: Moves to the next set of buttons (e.g. 10–18).
// * `handlePrevPage`: Goes back to the previous set (min 1).

// ---

// ### 🔹 **Render Method**

// ```js
// const { count, product, page } = this.state;
// const itemsPerPage = 9;
// const start = (page - 1) * itemsPerPage + 1;
// const end = start + itemsPerPage - 1;
// const totalProducts = 20;

// const buttonArray = [];
// for (let i = start; i <= end && i <= totalProducts; i++) {
//   buttonArray.push(i);
// }
// ```

// * Calculates which numbers to show (e.g., 1–9 or 10–18).
// * `buttonArray` holds the button numbers based on current `page`.

// ---

// ### 🔹 **JSX Layout**

// #### 📦 Wrapper

// ```jsx
// <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
// ```

// A vertical flexbox that centers all child elements.

// ---

// #### 🖼️ Product Display

// ```jsx
// <div style={{ display: "flex", justifyContent: "center" }}>
//   {!product ? <Loadspinner /> : <ProfileCard ... />}
// </div>
// ```

// Shows either a loading spinner or the product card.

// ---

// #### 🔢 Numbered Buttons

// ```jsx
// <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
//   {buttonArray.map((num) => (
//     <button ...>{num}</button>
//   ))}
// </div>
// ```

// Renders the 9 number buttons with a highlight for the current one.

// ---

// #### ⏮️ Pagination Controls

// ```jsx
// <div style={{ display: "flex", gap: "10px" }}>
//   <button onClick={...}>Prev</button>
//   <button onClick={...}>Next</button>
// </div>
// ```

// * Allows navigating between button pages.
// * `Prev` is disabled on first page.
// * `Next` is disabled when you reach the end (`totalProducts`).

// ---

// ### ✅ Summary

// | Part                 | Purpose                                     |
// | -------------------- | ------------------------------------------- |
// | `count`              | Product ID to display                       |
// | `product`            | Data of selected product                    |
// | `page`               | Controls which set of 9 buttons are visible |
// | `fetchProduct`       | Makes the API call                          |
// | `componentDidUpdate` | Triggers fetch on count change              |
// | Buttons              | Select product or navigate pages            |
// | `ProfileCard`        | Displays product details                    |
// | `Loadspinner`        | Shows loading state                         |

// ---
