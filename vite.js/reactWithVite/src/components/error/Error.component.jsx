import React, { useState } from "react";
const arr = [
  {
    message: "slide one",
  },
  {
    message: "slide two",
  },
  {
    message: "slide three",
  },
];
const ErrorComp = (props) => {
  const [index, setIndex] = useState(0);
  function increment() {
    if (index < arr.length - 1) {
      setIndex(index + 1);
      console.log(index);
    } else {
      setIndex(0);
    }
  }
  function decrease() {
    if (index == 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div>
      <button onClick={increment}>click for next</button>
      <h2>{arr[index].message}</h2>
      <button onClick={decrease}>click for previous </button>
    </div>
  );
};
export default ErrorComp;
