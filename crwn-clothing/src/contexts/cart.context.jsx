import { createContext, useState } from "react"

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpenState: () => null,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpenState] = useState(false);
    const value = { isCartOpen, setCartOpenState }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}