import "./checkout.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";


const Checkout = () => {
    const { cartItems, removeItemFromCart, addItemToCart } = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>

                </div>
                <div className="header-block">
                    <span>Quantity</span>

                </div>
                <div className="header-block">
                    <span>Price</span>

                </div>
                <div className="header-block">
                    <span>Remove</span>

                </div>
            </div>
            {cartItems.map(item => <CheckoutItem key={item.id} item={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />)}
            <div className="total">Total: ${cartTotal}</div>
        </div>
    )
}

export default Checkout;