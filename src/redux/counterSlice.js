import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: function (state, action) {
      state.value += 1;
    },
    decrement: function (state, action) {
      state.value -= 1;
    },
    zero: function (state, action) {
      state.value = 0;
    },
    addN: function (state, action) {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, zero, addN } = counterSlice.actions;
