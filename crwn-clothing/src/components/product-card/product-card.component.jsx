import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, ProductCardFooter } from "./product-card.styles";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}></img>
            <ProductCardFooter>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </ProductCardFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;