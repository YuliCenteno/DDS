import React, { useEffect, useState } from "react";

export default function Effect_State() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("counter dentro de effect: ", counter);
  }, [counter]);

  useEffect(() => {
    console.log("solo la primera vez");
  }, []);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleCounter()}>INCREMENTAR</button>
    </>
  );
}
