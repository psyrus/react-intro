import { useDispatch } from "react-redux";
import "./checkout-item.styles.jsx"
import { CheckoutImage, CheckoutImageContainer, CheckoutItemContainer, CheckoutItemProperty, CheckoutItemQuantity, CheckoutItemQuantityArrow, CheckoutItemQuantityValue, RemoveItemButton } from "./checkout-item.styles.jsx";

const CheckoutItem = (props) => {
    const { cartItems, item, removeItemFromCart, addItemToCart } = props;
    const dispatch = useDispatch();
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutImage src={item.imageUrl} alt={`${item.name}`} />
            </CheckoutImageContainer>
            <CheckoutItemProperty>{item.name}</CheckoutItemProperty>
            <CheckoutItemQuantity>
                <CheckoutItemQuantityArrow onClick={() => dispatch(removeItemFromCart(cartItems, item, 1))}>&#10094;</CheckoutItemQuantityArrow>
                <CheckoutItemQuantityValue>{item.quantity}</CheckoutItemQuantityValue>
                <CheckoutItemQuantityArrow className="arrow" onClick={() => dispatch(addItemToCart(cartItems, item))}>&#10095;</CheckoutItemQuantityArrow>
            </CheckoutItemQuantity>
            <CheckoutItemProperty>{item.price}</CheckoutItemProperty>
            <RemoveItemButton onClick={() => dispatch(removeItemFromCart(cartItems, item, item.quantity))}>&#10005;</RemoveItemButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;