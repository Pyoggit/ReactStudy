import "./ListItem.css";

const ListItem = ({
  id,
  isDone,
  content,
  writer,
  email,
  date,
  onUpdate,
  onDelete,
  onEdit,
}) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  const onClickEdit = () => {
    const newContent = prompt("새로운 내용을 입력하세요:", content);
    if (newContent && newContent.trim() !== "") {
      onEdit(id, newContent);
    }
  };

  return (
    <div className="listItem">
      <input
        readOnly
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      />
      <div className="content-wrapper">
        <p className="writer">작성자: {writer}</p>
        <p className="email">이메일: {email}</p>
        <p className="content">{content}</p>
        <p className="date">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="button-wrapper">
        <button onClick={onClickEdit}>수정</button>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default ListItem;
