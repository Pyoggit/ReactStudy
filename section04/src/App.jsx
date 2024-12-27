import "./App.css";
import { useState } from "react";

function Buld() {
  const [light, setLight] = useState("OFF");
  console.log(`Bulb ${light}`);
  return (
    <>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(`Counter ${count}`);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

function App() {
  console.log("App");
  return (
    <>
      <div>
        <Buld />
        <Counter />
      </div>
    </>
  );
}

export default App;
