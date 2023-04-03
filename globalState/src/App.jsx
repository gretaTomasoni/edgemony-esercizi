import { useState, useReducer } from "react";
import { CounterContext, TodoContext } from "./store";
import { globalReducer, todoReducer } from "./store/reducer";
import Counter from "./components/counter/Counter";
import TodoList from "./components/todoList/todoList";
import "./App.css";

//1. Creare il context - nel file store/index.js
// const CounterContext = createContext();

function App() {
  //2. Creare lo stato del counter
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(globalReducer, { count: 0 });
  const [state2, dispatch2] = useReducer(todoReducer, []);

  return (
    //3. Creare il provider
    // <CounterContext.Provider value={{ counter, setCounter }}>
    <CounterContext.Provider value={{ state, dispatch }}>
      <TodoContext.Provider value={{ state2, dispatch2 }}>
        <div className="App">
          <Counter />
          <TodoList />
        </div>
      </TodoContext.Provider>
    </CounterContext.Provider>
  );
}

export default App;
