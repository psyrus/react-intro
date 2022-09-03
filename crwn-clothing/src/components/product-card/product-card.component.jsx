import "./product-card.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartContext = useContext(CartContext);


    const addToCartHandler = (product) => {
        console.log("Add to cart handler");
        let idx = -1
        let cartItemsCopy = cartContext.cartItems;
        for (let index = 0; index < cartContext.cartItems.length; index++) {
            if (cartContext.cartItems[index].name === product.name) {
                idx = index
            }
        }
        if (idx === -1) {
            cartItemsCopy.push({ ...product, count: 0 })
            idx = cartItemsCopy.length - 1;
        }
        console.log(cartItemsCopy);
        cartItemsCopy[idx].count += 1;
        cartContext.setCartItems(cartItemsCopy);
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl}></img>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={(event) => { addToCartHandler(product) }}>Add to cart</Button>
        </div>
    );
}

export default ProductCard;