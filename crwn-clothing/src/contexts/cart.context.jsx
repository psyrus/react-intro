import { createContext, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    console.log(existingCartItem);

    if (existingCartItem) {
        return cartItems.map((item) => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
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

    const clearCart = () => {
        setCartItems([]);
    };

    const value = { isCartOpen, setCartOpenState, cartItems, addItemToCart, clearCart }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}