// Set up the action types
import { CART_ACTION_TYPES } from "./cart.types"; 
// Set up the actions

// set up the selector with redux

// Initial State
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

// Finally set up this reducer
export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            console.log("Setting cart items in reducer")
            return {
                ...state,
                cartItems: payload
            }

        case CART_ACTION_TYPES.SET_OPEN_STATE:
            console.log("Setting cart open state in reducer")
            return {
                ...state,
                isCartOpen: payload
            }
    
        default:
            return state;
    }
}