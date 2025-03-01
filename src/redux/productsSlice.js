import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.name = name;
        product.price = price;
        product.quantity = quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
