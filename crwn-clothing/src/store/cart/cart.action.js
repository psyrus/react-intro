import { CART_ACTION_TYPES } from "./cart.types";

export const setCartOpenState = (newCartOpenState) => {
    return {
        type: CART_ACTION_TYPES.SET_OPEN_STATE,
        payload: newCartOpenState,
    }
}

export const setCartItems = (cartItems) => {
    return {
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: cartItems,
    }
}

export const addItemToCart = (cartItems, productToAdd) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
}

export const removeItemFromCart = (cartItems, productToRemove, instancesToRemove = 1) => {
    return setCartItems(removeCartItem(cartItems, productToRemove, instancesToRemove));
}

export const clearCart = () => {
    return setCartItems([]);
};


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