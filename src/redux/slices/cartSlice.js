import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addItem, removeItem, toggleCart } = cartSlice.actions;
export const getTotalCount = (total, item) => (total + item.quantity, 0);

export const selectTotalCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectIsItemInCart = (itemId) => (state) =>
  state.cart.items.some((item) => item.id === itemId);

export default cartSlice.reducer;
