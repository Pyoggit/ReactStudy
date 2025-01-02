import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onInsert }) => {
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  const [email, setEmail] = useState("");
  const contentRef = useRef();
  const writerRef = useRef();
  const emailRef = useRef();

  const onSubmit = () => {
    if (content === "" || writer === "" || email === "") {
      alert("내용과 작성자를 모두 입력해주세요.");
      if (content === "") contentRef.current.focus();
      if (writer === "") writerRef.current.focus();
      if (email === "") emailRef.current.focus();
      return;
    }
    onInsert(content, writer, email);
    setContent("");
    setWriter("");
    setEmail("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="editor">
      <input
        value={writer}
        ref={writerRef}
        type="text"
        onChange={(e) => setWriter(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="작성자"
      />
      <input
        value={email}
        ref={emailRef}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="이메일"
      />
      <input
        value={content}
        ref={contentRef}
        type="text"
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
