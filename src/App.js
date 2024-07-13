import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");

  const increment = () => {
    setValue(value + 1);
    setError("");
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
      setError("");
    } else {
      setError("Value cannot go below 0");
    }
  };

  return (
    <>
      <div>{value}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}
