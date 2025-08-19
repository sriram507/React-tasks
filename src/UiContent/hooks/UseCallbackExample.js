import React, { useState, useCallback } from "react";

const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton rendered");
  return <button onClick={onClick}>Click Child</button>;
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(5);

  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []); //  same function every render

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <ChildButton onClick={handleClick} />
    </div>
  );
}

