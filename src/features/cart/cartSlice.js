import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, quantity, unitPrice } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity += quantity;
        item.totalPrice += quantity * unitPrice;
      } else {
        const totalPrice = quantity * unitPrice;
        state.cart.push({ ...action.payload, totalPrice });
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item) {
        item.quantity = payload.quantity;
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addItem, removeItem, selectItemQuantity, clearCart } =
  cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getTotalPrice = (state) =>
  state.cart((total, item) => (total += item.quantity), 0);
export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;
