// import React, { useState } from "react";

// export default function FunLifeCycle() {
//   const [text, setText] = useState("Hi");
//   const handleButton=()=>{
//     setText("Hello");
//   };
//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={handleButton}>Clickme</button>
//     </div>
//   );
// }






import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
