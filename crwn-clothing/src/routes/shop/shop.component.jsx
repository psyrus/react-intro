import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component"
import "./shop.styles.scss"

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment>
                        <div className="products-container"><h2>{title}</h2>
                            {categoriesMap[title].map((productItem) => (
                                <ProductCard key={productItem.id} product={productItem}></ProductCard>
                            ))}
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop;