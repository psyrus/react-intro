import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setCartOpenState } = useContext(CartContext);

    const toggleCartOpenState = () => {
        setCartOpenState(!isCartOpen);
    }
    return (
        <div className="cart-icon-container" onClick={toggleCartOpenState}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">0</span>
        </div>
    );
}

export default CartIcon;