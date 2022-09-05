import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setCartOpenState, cartItems } = useContext(CartContext);

    const toggleCartOpenState = () => {
        setCartOpenState(!isCartOpen);
    }
    const totalCartItems = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    console.log(totalCartItems);
    return (
        <div className="cart-icon-container" onClick={toggleCartOpenState}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{totalCartItems > 99 ? "99+" : totalCartItems}</span>
        </div>
    );
}

export default CartIcon;