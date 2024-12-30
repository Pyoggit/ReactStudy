import { useState } from "react";
import { useRef } from "react";

const Register = () => {
  const countRef = useRef(0);
  const inputRef = useRef();
  const [input, setInput] = useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  });

  let onChange = function (e) {
    countRef.current++;

    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //전송을 할때 점검
  const onSubmit = () => {
    if (input.name === "") {
      alert("name 값이 없습니다");
      inputRef.current.focus();
      console.log(inputRef);
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          value={input.name}
          onChange={onChange}
          name="name"
          type="text"
          placeholder="이름"
        />
      </div>
      <div>
        <input
          value={input.birth}
          name="birth"
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select value={input.country} name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="use">미국</option>
          <option value="uk">영국</option>
          <option value="jp">일본</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>전송</button>
    </>
  );
};

export default Register;
