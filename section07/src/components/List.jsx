import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterItem = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((item) => {
      return item.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterItem = getFilterItem();

  return (
    <div className="list">
      <h4>게시글</h4>
      <input
        value={search}
        type="text"
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요"
      />
      <div className="item">
        {filterItem.map((item) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onEdit={onEdit} // 수정 핸들러 전달
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
