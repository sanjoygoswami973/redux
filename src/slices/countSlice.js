import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // current state
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, actions) => {
      console.log(actions.payload);
      state.value = state.value + actions.payload;
    },
    decrement: (state, actions) => {
      if (state.value > 1) {
        state.value -= actions.payload;
      }
    },
    multiplication: (state, actions) => {
      state.value *= actions.payload;
    },
    division: (state, actions) => {
      state.value /= actions.payload;
    },
  },
});

export const { increment, decrement, multiplication, division } =
  counterSlice.actions;

export default counterSlice.reducer;
