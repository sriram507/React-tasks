import React, { useEffect } from "react";

export default function FunctionTimer() {
  useEffect(() => {
    return () => {
      console.log("FunctionTimer is removed from screen!");
    };
  }, []);

  return <h2>⏳ Function Component Timer</h2>;
}
