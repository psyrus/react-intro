import { useDispatch, useSelector } from "react-redux";
import { setCartOpenState } from "../../store/cart/cart.action";
import { CartIconContainer, ItemCount, ShoppingIconStyling } from "./cart-icon.styles";

import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);
    

    const toggleCartOpenState = () => {
        dispatch(setCartOpenState(!isCartOpen));
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