import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addN, decrement, increment, zero } from "./redux/counterSlice";
import ModalComponent from "./components/ModalComponent";
function App() {
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addN(20));
  }

  return (
    <div>


      <ModalComponent />
      <div>
        <h1>counter:{counter}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch(zero());
          }}
        >
          reset
        </button>
        <button onClick={handleAdd}>addN</button>
      </div>
    </div>
  );
}

export default App;
