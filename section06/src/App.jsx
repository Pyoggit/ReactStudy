import "./App.css";
import { useState, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  //마운트 될때, 카운트 값이 변경이 될 때
  useEffect(
    () => {
      console.log(`(Mount, Update)count: ${count}`);
    },
    [count],
    [input]
  );

  const onClickButton = (value) => {
    setCount(count + value);
  };

  //input 변화된 값
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="app">
        <h1>Simple counter</h1>
        <div>
          <input type="text" value={input} onChange={onChangeInput} />
        </div>
        <section className="viewer">
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>

        <section className="controller">
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </>
  );
}

export default App;
