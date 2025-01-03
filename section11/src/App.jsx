import "./App.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-images";
import img1 from "./assets/emotion1.png";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Header
        left={<Button text={"<"} type={"GREEN"} />}
        title={"Header"}
        right={<Button text={">"} type={"RED"} />}
      />

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
        <br />

        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/diary">Diary</a>
        <a href="/edit">Edit</a>
        <br />

        <button
          onClick={() => {
            nav("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            nav("/new");
          }}
        >
          New
        </button>
        <button
          onClick={() => {
            nav("/diary");
          }}
        >
          Diary
        </button>
        <button
          onClick={() => {
            nav("/edit");
          }}
        >
          edit
        </button>
        <br />

        <img src={getEmotionImage(1)} alt="감정" />
        <img src={getEmotionImage(2)} alt="감정" />
        <img src={getEmotionImage(3)} alt="감정" />
        <img src={getEmotionImage(4)} alt="감정" />
        <img src={getEmotionImage(5)} alt="감정" />
        <br />
        <img src={img1} alt="감정" />
        <img src={"/emotion1.png"} alt="감정" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
