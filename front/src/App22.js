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
      <div style={{ width: 250, marginLeft: 70 }}>
        <MyComponent sendData={getCountData} />
      </div>
      <div className="app">
        <div style={{ width: 150, marginLeft: 70, marginTop: 50 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
              // Customize the root svg element
              root: {},
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: "#D53F8C",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transform: "rotate(0.0turn)",
                transformOrigin: "center center",
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "#d6d6d6",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Rotate the trail
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              // Customize the text
              text: {
                // Text color
                fill: "#805AD5",
                // Text size
                fontSize: "16px",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#3e98c7",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
