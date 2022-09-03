import { createContext, useState } from "react"

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpenState: () => null,
    cartItems: [],
    setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpenState] = useState(false);
    const [cartItems, setCartItems] = useState([])

    const value = { isCartOpen, setCartOpenState, cartItems, setCartItems }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}