import { useState } from "react";
import TodoItem from "../todoItem";
import TodoAdd from "../todoAdd";
import list from "../../mock/list";
import "./index.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState(list);

  const pushArray = (e) => {
    e.preventDefault();
    if (value != "") {
      setArr([
        ...arr,
        {
          id: Date.now(),
          text: value,
        },
      ]);

      setValue("");
    }
  };

  return (
    <div className="TodoList">
      <h1>TodoList</h1>
      <TodoAdd callback={pushArray} value={value} setValue={setValue} />
      {arr.map((todo) => (
        <TodoItem arr={arr} setArr={setArr} todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
