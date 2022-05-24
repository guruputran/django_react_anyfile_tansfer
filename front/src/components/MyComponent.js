/** @format */

import React, { useState } from "react";
import useInterval from "../hooks/useinterval";
import { Button, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";

export default function MyComponent(props) {
  // The counter
  const [count, setCount] = useState(0);
  // Dynamic delay
  const [delay, setDelay] = useState(1000);
  // ON/OFF
  const [isPlaying, setPlaying] = useState(false);
  // max value
  const [inputText, SetinputText] = React.useState(100);
  // stop flag
  const [stop, Setstop] = React.useState(false);
  // steps
  const steps = 10;

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
      let counter = Math.min(count + steps, inputText);
      setCount(counter);
      handleChild();
      if (counter >= inputText) {
        Setstop(true);
        setPlaying(false);
      }
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  );

  const handleChange = (event) => {
    setDelay(Number(event.target.value));
  };

  function delayed(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  React.useEffect(() => {
    if (stop) {
      //is true
      console.log("I am triggered");
      delayed(1000).then(() => handleChild());
      Setstop(false);
    }
  }, [stop]);

  const handleChild = () => {
    console.log("KOUNT", count);
    props.sendData(count);
  };

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setPlaying(!isPlaying)}
        className="bg-blue-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mx-1"
      >
        {isPlaying ? "pause" : "play"}
      </button>
      <button
        onClick={() => {
          setPlaying(true);
          setCount(0);
        }}
        className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Reset
      </button>

      <p>
        <label htmlFor="delay">Delay: </label>
        <input
          type="number"
          name="delay"
          onChange={handleChange}
          value={delay}
        />
      </p>
    </>
  );
}
