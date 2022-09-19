import "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"
import { useNavigate } from "react-router-dom"
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles.jsx"


const CartDropDown = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navTo = useNavigate();
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
            </CartItems>
            <Button onClick={() => clearCart()}>Clear Cart</Button>
            <Button onClick={() => navTo("/checkout")}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown;