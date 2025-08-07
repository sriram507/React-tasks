// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function UseeffectComp() {
//   const [value, setValue] = useState(0);
//   const [message, setMessage] = useState("hi");
//   const [display, setDisplay] = useState("a");

//   const handleMessage = () => {
//     setMessage((prev) => prev + "10k");
//   };

// useEffect(() => { 
//   axios.get("https://fakestoreapi.in/api/products")
//     .then((res) => {
//       const firstProductTitle = res.data.products[0]?.title || "No title found";
//       setDisplay((prev) => prev + firstProductTitle);
//       console.log("First product title:", firstProductTitle);
//     })
//     .catch((err) => {
//       console.error("API Error:", err);
//     });
// }, []);


//   return (
//     <div>
//       <h1>value: {value}</h1>
//       <h1>message: {message}</h1>
//       <h1>display: {display}</h1>
//       <button onClick={handleMessage}>click me</button>
//       <button>display</button>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonComp from '../buttonComp';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load products from API
  useEffect(() => {
    axios
      .get('https://fakestoreapi.in/api/products')
      .then((response) => {
        setProducts(response.data.products || []);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍️ Available Products</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              width: '250px',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                marginBottom: '10px',
              }}
            />
            <h3>{product.title}</h3>
            <p style={{ fontSize: '14px' }}>
              {product.description.slice(0, 100)}...
            </p>
            <ButtonComp name="Add to Cart" onClick={() => handleAddToCart(product)} />
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '30px' }}>
        🛒 Cart Items ({cart.length})
      </h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.title}{' '}
            <ButtonComp
              name="Remove"
              onClick={() => handleRemoveFromCart(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


