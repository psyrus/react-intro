import { createSelector } from "reselect";

// Create selector layer 1 that will always query the state
const selectCartReducer = (state) => state.cart;

// Create selector layer 2 that will use queried state and return the memoized version if nothing has changed
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.cartItems;
  }
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.isCartOpen;
  }
)