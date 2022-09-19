import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal } from "./checkout.styles.jsx";


const Checkout = () => {
    const { cartItems, removeItemFromCart, addItemToCart } = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>

                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>

                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>

                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>

                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item => <CheckoutItem key={item.id} item={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />)}
            <CheckoutTotal>
                Total: ${cartTotal}
            </CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout;