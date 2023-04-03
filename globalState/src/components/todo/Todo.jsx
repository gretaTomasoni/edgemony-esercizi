const Todo = ({ todo, dispatch }) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <p style={{ color: todo.complete ? "#AAA" : "#000" }}>- {todo.value}</p>
      <button
        onClick={() =>
          dispatch({ type: "toggleTodo", payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: "deleteTodo", payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
