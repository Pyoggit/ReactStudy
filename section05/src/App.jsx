import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="app">
        <h1>Simple counter</h1>
        <section className="viewer">
          <Viewer count={count} />
        </section>

        <section className="controller">
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}

export default App;
