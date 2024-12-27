import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  console.log("App");
  return (
    <>
      <div>
        <Bulb />
        <Counter />
      </div>
    </>
  );
}

export default App;
