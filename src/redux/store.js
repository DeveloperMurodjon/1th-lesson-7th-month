import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});
