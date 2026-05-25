import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  items: [],
};

const wishlistslice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    togglewishlist: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.items.push(product);
      }
    },
  },
});

export const {togglewishlist} = wishlistslice.actions;
export default wishlistslice.reducer;