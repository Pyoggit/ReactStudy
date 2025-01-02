import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const idRef = useRef(3);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onInsert = (content, writer, email) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      writer,
      email,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((item) => {
        return item.id === targetId ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== targetId;
      })
    );
  };

  // 수정 핸들러 추가
  const onEdit = (targetId, newContent) => {
    setTodos(
      todos.map((item) => {
        return item.id === targetId ? { ...item, content: newContent } : item;
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <Editor onInsert={onInsert} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
}

export default App;
