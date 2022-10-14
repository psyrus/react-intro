import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal } from "./checkout.styles.jsx";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);

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
            {cartItems.map(item => <CheckoutItem key={item.id} cartItems={cartItems} item={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />)}
            <CheckoutTotal>
                Total: ${cartTotal}
            </CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout;