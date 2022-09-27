import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
};

export const cartReducer = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addNewPruduct: (state, action) => {
      if (state.cart.length === 0) {
        state.cart.push(action.payload);
      } else {
        const product = action.payload;
        const newCart = state.cart.filter((productCart) => productCart.id !== product.id);
        state.cart = [...newCart, product];
      }
    },
    getCartTotal: (state) => {
      if (state.cart.length !== 0) {
        const total = state.cart
          .reduce((acc, curr) => {
            acc += curr.price * curr.quantity;
            return acc;
          }, 0);
        state.total = total;
        return;
      }
      state.total = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewPruduct, getCartTotal } = cartReducer.actions;

export default cartReducer.reducer;
