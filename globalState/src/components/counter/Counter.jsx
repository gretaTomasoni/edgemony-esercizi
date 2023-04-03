import { useContext } from "react";
import { CounterContext } from "../../store";

const Counter = () => {
  //4. Richiamare lo stato con useContext
  //   const { counter, setCounter } = useContext(CounterContext);
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h3>Counter:</h3>
      {/* nel caso di useContext */}
      {/* <button onClick={() => setCounter((prev) => prev - 1)}>Decrementa</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>Incrementa</button> */}

      {/* nel caso di useReducer */}
      <div style={{ display: "flex", gap: 20, marginBottom: 50 }}>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrementa
        </button>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>
          Incrementa
        </button>
      </div>
    </div>
  );
};

export default Counter;
