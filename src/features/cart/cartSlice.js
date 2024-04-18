import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
      }
      item.totalPrice = item.unitPrice * item.quantity;
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

export const menu = (state) => state.cart.menu;
export const totalPrice = (state) =>
  state.cart((total, item) => (total += item.quantity), 0);

export default cartSlice.reducer;
