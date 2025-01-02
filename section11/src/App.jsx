import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import New from "./pages/NEw";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
