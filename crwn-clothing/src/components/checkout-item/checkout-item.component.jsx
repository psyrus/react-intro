import "./checkout-item.styles.jsx"
import { CheckoutImage, CheckoutImageContainer, CheckoutItemContainer, CheckoutItemProperty, CheckoutItemQuantity, CheckoutItemQuantityArrow, CheckoutItemQuantityValue, RemoveItemButton } from "./checkout-item.styles.jsx";

const CheckoutItem = (props) => {
    const { item, removeItemFromCart, addItemToCart } = props;
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutImage src={item.imageUrl} alt={`${item.name}`} />
            </CheckoutImageContainer>
            <CheckoutItemProperty>{item.name}</CheckoutItemProperty>
            <CheckoutItemQuantity>
                <CheckoutItemQuantityArrow onClick={() => removeItemFromCart(item, 1)}>&#10094;</CheckoutItemQuantityArrow>
                <CheckoutItemQuantityValue>{item.quantity}</CheckoutItemQuantityValue>
                <CheckoutItemQuantityArrow className="arrow" onClick={() => addItemToCart(item)}>&#10095;</CheckoutItemQuantityArrow>
            </CheckoutItemQuantity>
            <CheckoutItemProperty>{item.price}</CheckoutItemProperty>
            <RemoveItemButton onClick={() => removeItemFromCart(item, item.quantity)}>&#10005;</RemoveItemButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;