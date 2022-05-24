/** @format */

import React from "react";

export default function MyCounter() {
  const [counter, Setcounter] = React.useState(0);
  const [inputText, SetinputText] = React.useState(0);

  const onChange = (event) => {
    let inputs = Number(event.target.value);
    SetinputText(inputs);
  };

  const onIncrease = () => {
    let count = Math.min(counter + 1, inputText);
    Setcounter(count);
  };

  const onDecrease = () => {
    let count = Math.max(0, counter - 1);
    Setcounter(count);
  };

  return (
    <>
      <h2>Counter: {counter}</h2>
      <input onChange={onChange} />
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </>
  );
}
