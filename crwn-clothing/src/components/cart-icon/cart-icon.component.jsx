import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIconStyling } from "./cart-icon.styles";

const CartIcon = () => {
    const { isCartOpen, setCartOpenState, cartItems } = useContext(CartContext);

    const toggleCartOpenState = () => {
        setCartOpenState(!isCartOpen);
    }
    const totalCartItems = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <CartIconContainer onClick={toggleCartOpenState}>
            <ShoppingIconStyling className="shopping-icon"></ShoppingIconStyling>
            <ItemCount>{totalCartItems > 99 ? "99+" : totalCartItems}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;