/** @format */

import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MyComponent from "./components/MyComponent";

function App(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   if (percentage < 100) {
    //     setPercentage(percentage + 10);
    //   }
    // }, 500);
  }, [percentage]);

  const getCountData = (props) => {
    console.log("Props", props);
    setPercentage(props);
  };

  return (
    <>
      <MyComponent sendData={getCountData} />
      <div className="app">
        <h4>Circular progress bar</h4>
        <div style={{ width: 150, marginLeft: 70 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </>
  );
}

export default App;
