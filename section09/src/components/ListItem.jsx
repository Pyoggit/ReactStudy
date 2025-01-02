import "./ListItem.css";
import { memo } from "react";

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  console.log(`Listitem ${id}`);

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

//고차컴포넌트(HOC : )
// export default memo(ListItem, (prevProps, nextProps) => {
//   //memo 이전값과 현재값을 비교
//   //return false (리렌더링을 발생한다)
//   //return true (리렌더링을 발생시키지않는다)
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.iaDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(ListItem);
