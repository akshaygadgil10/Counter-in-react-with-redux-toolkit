import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log("in increment");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("in decrement");
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetCounter } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from the state. Selectors can also be defined inline where they're used instead of in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
