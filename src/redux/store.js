import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
