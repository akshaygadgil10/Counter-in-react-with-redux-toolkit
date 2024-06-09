import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  resetCounter,
} from "./counterSlice";

const Counter = () => {
  //   const count = useSelector((state) => state.counter.value);

  const count = useSelector(selectCount); //selectCount - is a selector and allows us to select a value from the state instead of creating new reducer function or accessing value directly eg const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      Current Count is :{count}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;
