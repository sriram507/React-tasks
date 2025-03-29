import { Component } from "react";
import "./main.css";

const products = [
  {
    productName: "mobile",
    produtPrice: 55000,
    productAvailability: false,
  },
  { productName: "laptop", produtPrice: 55000, productAvailability: true },

  { productName: "watch", produtPrice: 30000, productAvailability: false },
];

class Main extends Component {
  render() {
    return (
      <>
        <div className="mainbox">
          <div
            className={
              products[0].productAvailability ? "available" : "unavailable"
            }
          >
            <h1> {products[0].productName}</h1>
            <h1>{products[0].produtPrice}</h1>
          </div>
          <div
            className={
              products[1].productAvailability ? "available" : "unavailable"
            }
          >
            <h1>{products[1].productName}</h1>
            <h1>{products[1].produtPrice}</h1>
          </div>
          <div className={products[2].productAvailability?"available":"unavailable"}>
            <h1>{products[2].productName}</h1>
            <h1>{products[2].produtPrice}</h1>

          </div>
        </div>
      </>
    );
  }
}

export default Main;