import "./cart-dropdown.styles.jsx"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../store/cart/cart.action.js"
import { selectCartItems } from "../../store/cart/cart.selector.js"


const CartDropDown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const navTo = useNavigate();
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map(item => <CartItem cartItem={item} key={item.id} />) : <EmptyMessage>No items in cart</EmptyMessage>
                }
            </CartItems>
            <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
            <Button onClick={() => navTo("/checkout")}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown;