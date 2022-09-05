import "./checkout.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";


const Checkout = () => {
    const { cartItems, removeItemFromCart, addItemToCart } = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)

    console.log(cartItems)
    return (
        <div className="checkout-page">
            <h1>Checkout Page</h1>
            {cartItems.map(item => <CheckoutItem item={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />)}
            <div className="checkout-total">${cartTotal}</div>
        </div>
    )
}

export default Checkout;