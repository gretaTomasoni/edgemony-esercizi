import { useState } from "react";
import { FiCircle, FiX } from "react-icons/fi";

import "./index.css";

const TodoItem = ({ arr, setArr, todo }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const onHandleClick = () => {
    setIsEmpty((prev) => !prev);
  };

  function removeObjectWithId(arr, id) {
    const arrCopy = Array.from(arr);

    const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === todo.id);
    arrCopy.splice(objWithIdIndex, 1);
    return arrCopy;
  }

  const deleteFunc = () => {
    const newArr = removeObjectWithId(arr, 2);
    setArr(newArr);
    console.log(newArr);
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem_content">
        <FiCircle
          onClick={onHandleClick}
          className={`TodoItem_emptyCircle ${isEmpty && "fill"}`}
        />
        <p>{todo.text}</p>
      </div>
      <FiX onClick={deleteFunc} className="TodoItem_deleteButton" />
    </div>
  );
};

export default TodoItem;
