//1. Creare il reducer
export const globalReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case "addTodo":
      if (action.payload.value !== "") {
        return [...todos, newTodo(action.payload.value)];
      }
    case "toggleTodo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "deleteTodo":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

function newTodo(value) {
  return { id: Date.now(), value: value, complete: false };
}
