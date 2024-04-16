import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {},
    removeItem: (state) => {},
    selectItemQuantity: (state) => {},
    clearCart: () => {},
  },
});

export const { addItem, removeItem, selectItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
