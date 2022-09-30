import { createContext } from "react"
import { useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((item) => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove, instancesToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === productToRemove.id);

    if (null === existingCartItem) {
        return;
    }

    if (existingCartItem.quantity <= instancesToRemove) {
        return cartItems.filter(item => item.id !== productToRemove.id)
    }

    // Need to reduce the quantity of the found item
    return cartItems.map((item) => item.id === productToRemove.id ? { ...item, quantity: item.quantity - instancesToRemove } : item)

    // If the quantity is now 0, should be removed entirely
}

export const CART_ACTION_TYPES = Object.freeze({
    SET_CART_ITEMS: Symbol("SET_CART_ITEMS"),
    SET_OPEN_STATE: Symbol("SET_OPEN_STATE"),
});

// We use a reducer when one update needs to mutate multiple readable values within the state at once 
const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            console.log("Setting cart items?")
            return {
                ...state,
                cartItems: payload
            }

        case CART_ACTION_TYPES.SET_OPEN_STATE:
            console.log("Setting cart open state")
            return {
                ...state,
                isCartOpen: payload
            }
    
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    setCartOpenState: () => null,
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
};

export const CartContext = createContext(INITIAL_STATE);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const {isCartOpen, cartItems} = state;

    const setCartOpenState = (newCartOpenState) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_OPEN_STATE,
            payload: newCartOpenState,
        })
    }

    const setCartItems = (cartItems) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: cartItems,
        })
    }

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove, instancesToRemove = 1) => {
        setCartItems(removeCartItem(cartItems, productToRemove, instancesToRemove));
    }

    const clearCart = () => {
        setCartItems([]);
    };

    const value = { isCartOpen, setCartOpenState, cartItems, addItemToCart, clearCart, removeItemFromCart }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}