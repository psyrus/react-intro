import { CartImage, CartItemContainer, ItemDetails, ItemName, ItemPrice } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <CartImage src={imageUrl} alt={`${name}`} />
            <ItemDetails className="item-details">
                <ItemName className="name">{name}</ItemName>
                <ItemPrice className="price">{quantity} x ${price}</ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;