/** @format */

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./progress/AnimatedProgressProvider";
import ChangingProgressProvider from "./progress/ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./progress/RadialSeparators";
import Tailchakra from "./components/Tailchakra";
import MyComponent from "./components/MyComponent";
import MyCounter from "./components/MyCounter";

const percentage = 66;
const per_array = [0, 15, 30, 55, 68, 90, 100];

const App = () => (
  <div
    style={{
      padding: "40px 40px 40px 40px",
    }}
  >
    {/* <MyCounter /> */}
    <MyComponent />
    {/* <Tailchakra /> */}
    <Example>
      <ChangingProgressProvider values={per_array}>
        {(percentage) => (
          <div style={{ width: "50%" }}>
            {/* adjust circle size here */}
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
                  transform: "rotate(0.25turn)",
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
        )}
      </ChangingProgressProvider>
    </Example>
  </div>
);
export default App;

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
