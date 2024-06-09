import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  resetCounter,
} from "./counterSlice";

const CounterUsinguseMemo = () => {
  const [pause, setPause] = useState(false);
  const count = useSelector(selectCount);
  let calculation = useMemo(() => [count]);

  const dispatch = useDispatch();

  const pauseCounter = () => {
    setPause(!pause);
  };

  React.useEffect(() => {
    calculation =
      !pause &&
      setTimeout(() => {
        console.log(count);
        dispatch(increment());
      }, 1000);
  }, [count, pause]);

  return (
    <div>
      <h1>Counter using useMemo: {count}</h1>
      <button onClick={() => pauseCounter()}>
        {!pause ? "Pause" : "Resume"}
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default CounterUsinguseMemo;
