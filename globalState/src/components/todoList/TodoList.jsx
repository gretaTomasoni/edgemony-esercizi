import { useState, useContext } from "react";
import { TodoContext } from "../../store";
import Todo from "../todo/Todo";

const TodoList = () => {
  const { state2, dispatch2 } = useContext(TodoContext);
  const [value, setValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch2({ type: "addTodo", payload: { value: value } });
    setValue("");
  };

  console.log(state2);

  return (
    <div className="TodoList">
      <h3>TodoList:</h3>
      <div>
        <span>Tutti i task: </span>
        <span>{state2.length || 0}</span>
      </div>
      <div>
        <span>Task completati: </span>
        <span>
          {state2.reduce((acc, current) => {
            current.complete && acc++;
            return acc;
          }, 0)}
        </span>
      </div>
      <form
        onSubmit={onHandleSubmit}
        style={{ display: "flex", gap: 20, marginBottom: 20, marginTop: 20 }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(() => e.target.value)}
        />
        <button type="submit">Aggiungi nota</button>
      </form>
      {state2.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch2} />
      ))}
    </div>
  );
};

export default TodoList;
