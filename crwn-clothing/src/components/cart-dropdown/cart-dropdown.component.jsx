import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"

import { CartContext } from "../../contexts/cart.context"


const CartDropDown = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
            </div>
            <Button onClick={() => clearCart()}>Clear Cart</Button>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropDown;