import "./ListItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const ListItem = ({ id, isDone, content, date }) => {
  console.log(`ListItem ${id}`);

  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickItem = () => {
    onDelete(id);
  };

  return (
    <div className="listItem">
      <input
        readOnly
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      />
      <p className="content">{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button onClick={onClickItem}>삭제</button>
    </div>
  );
};

export default memo(ListItem);
