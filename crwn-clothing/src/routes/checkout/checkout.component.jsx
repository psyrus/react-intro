import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const Checkout = () => {
    const { cartItems, removeItemFromCart, addItemToCart } = useContext(CartContext);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)

    console.log(cartItems)
    return (
        <div className="checkout-page">
            <h1>Checkout Page</h1>
            {cartItems.map(item => (
                <div className="checkout-item">
                    <img src={item.imageUrl} alt={`${item.name}`} />
                    <span>{item.name}</span>
                    <span><span className="remove-item" onClick={() => removeItemFromCart(item, 1)}>{`<`}</span>{item.quantity}<span className="add-item" onClick={() => addItemToCart(item)}>{`>`}</span></span>
                    <span>{item.price}</span>
                    <span onClick={() => removeItemFromCart(item, item.quantity)}>X</span>
                </div>
            ))}
            <div className="checkout-total">${cartTotal}</div>
        </div>
    )
}

export default Checkout;