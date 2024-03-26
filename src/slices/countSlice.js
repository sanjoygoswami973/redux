import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // current state
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state, actions) => {
      console.log(state.value + actions.payload);
      state.value += actions.payload;
    },
    decrement: (state, actions) => {
      console.log(state.value - actions.payload);
      if (state.value > 1) {
        state.value -= actions.payload;
      }
    },
    multiplication: (state, actions) => {
      console.log(state.value + actions.payload);
      state.value *= actions.payload;
    },
    division: (state, actions) => {
      console.log(state.value + actions.payload);
      state.value /= actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, multiplication, division } =
  counterSlice.actions;

export default counterSlice.reducer;
