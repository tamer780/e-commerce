import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const price = Number(newItem.price);

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: price,
          quantity: 1,
          totalPrice: price,
          images: newItem.thumbnail,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += price;
      }

      state.totalQuantity++;
      state.totalPrice += price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.totalPrice;
      state.items = state.items.filter((item) => item.id !== id);
    },

    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;

      state.totalQuantity--;
      state.totalPrice -= item.price;

      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        item.quantity--;
        item.totalPrice -= item.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
