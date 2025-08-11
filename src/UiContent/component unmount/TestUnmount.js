import React, { useState } from "react";
import ClassTimer from "./ClassTimer";
import FunctionTimer from "./FunctionTimer";

function TestUnmount() {
  const [showClass, setShowClass] = useState(true);
  const [showFunction, setShowFunction] = useState(true);

  return (
    <div>
      <button onClick={() => setShowClass(!showClass)}>Toggle Class</button>
      <button onClick={() => setShowFunction(!showFunction)}>Toggle Function</button>

      {showClass && <ClassTimer />}
      {showFunction && <FunctionTimer />}
    </div>
  );
}

export default TestUnmount;
