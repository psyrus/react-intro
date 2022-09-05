import "./checkout-item.styles.scss"

const CheckoutItem = (props) => {
    const { item, removeItemFromCart, addItemToCart } = props;
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={item.imageUrl} alt={`${item.name}`} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => removeItemFromCart(item, 1)}>&#10094;</span>
                <span className="value">{item.quantity}</span>
                <span className="arrow" onClick={() => addItemToCart(item)}>&#10095;</span>
            </span>
            <span className="price">{item.price}</span>
            <div className="remove-button" onClick={() => removeItemFromCart(item, item.quantity)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;