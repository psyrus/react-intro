import { createContext, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    console.log(existingCartItem);

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
        return cartItems.filter(item => item.id != productToRemove.id)
    }

    // Need to reduce the quantity of the found item
    return cartItems.map((item) => item.id === productToRemove.id ? { ...item, quantity: item.quantity - instancesToRemove } : item)

    // If the quantity is now 0, should be removed entirely
}

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpenState: () => null,
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpenState] = useState(false);
    const [cartItems, setCartItems] = useState([]);

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