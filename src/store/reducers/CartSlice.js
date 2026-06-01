import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addtoCart: (state, action) => {
      const item = action.payload;

      const existitems = state.cartitems.find(
        (product) => product.id === item.id,
      );

      if (existitems) {
        existitems.quantity += 1;
      } else {
        state.cartitems.push({
          ...item,
          quantity: 1,
        });
      }
    },
    removefromcart: (state, action) => {
      state.cartitems = state.cartitems.filter(
        (item) => item.id !== action.payload,
      );
    },
    increasequantity: (state, action) => {
      const item = state.cartitems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    descreasequantity: (state, action) => {
      const item = state.cartitems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartitems = state.cartitems.filter(
            (item) => item.id !== action.payload,
          );
        }
      }
    },
  },
});

export const { addtoCart, removefromcart,increasequantity,descreasequantity } = cartSlice.actions;

export default cartSlice.reducer;
