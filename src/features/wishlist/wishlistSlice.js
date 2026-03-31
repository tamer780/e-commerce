import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const id = action.payload.id;
      const exists = state.favorite.find((fav) => fav.id === id);

      if (exists) {
        state.favorite = state.favorite.filter((fav) => fav.id !== id);
      } else {
        state.favorite.push(action.payload);
      }
    },

    clearWishlist: (state) => {
      state.favorite = [];
    },

    removeFromList: (state, action) => {
      const id = action.payload;
      state.favorite = state.favorite.filter((fav) => fav.id !== id);
    },
  },
});

export const wishlistAction = wishListSlice.actions;

export default wishListSlice.reducer;
