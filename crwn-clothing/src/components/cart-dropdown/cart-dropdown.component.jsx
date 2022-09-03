import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useState } from "react";

const CartDropDown = () => {
    const cartContext = useContext(CartContext);
    console.log(cartContext);

    const clearCartHandler = () => {
        console.log("Clear cart handler");
        cartContext.setCartItems([])
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartContext.cartItems.map((item) => (
                    <div key={item.id}>{item.count} | {item.name} - (${item.price})</div>
                ))}
            </div>
            <Button onClick={clearCartHandler}>Clear Cart</Button>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropDown;