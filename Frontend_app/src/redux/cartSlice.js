import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const itemIndex = state.findIndex(
        item => item._id === action.payload._id,
      );

      if (itemIndex !== -1) {
        const item = state[itemIndex];
        const newQuantity = item.quantity + action.payload.quantity;

        if (newQuantity <= 0) {
          // If the new quantity is less than or equal to 0, remove the item
          state.splice(itemIndex, 1);
        } else {
          // Update the item's quantity
          state[itemIndex].quantity = newQuantity;
        }
      } else {
        // Item not found in the cart, add it
        state.push(action.payload);
      }
    },

    RESET: state => {
      // Reset the state to its initial value
      return initialState;
    },
  },
});

export const {ADD_TO_CART, RESET} = cartSlice.actions;

export default cartSlice.reducer;
