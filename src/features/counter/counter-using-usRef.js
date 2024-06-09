import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  resetCounter,
} from "./counterSlice";

const CounterUsinguseRef = () => {
  //   const count = useSelector((state) => state.counter.value);
  const [pause, setPause] = useState(false);

  const count = useSelector(selectCount);
  const dispatch = useDispatch(); // The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
  let timer = useRef();

  useEffect(() => {
    timer.current =
      !pause &&
      setTimeout(() => {
        dispatch(increment());
      }, 1000);
  }, [count, pause]);

  const handlePause = () => {
    setPause(!pause);
  };

  return (
    <div>
      <h1>Counter using useRef: {count}</h1>
      <button onClick={() => handlePause()}>
        {!pause ? "Pause" : "Resume"}
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default CounterUsinguseRef;
