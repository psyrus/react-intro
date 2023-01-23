import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector.js";
import "./category.styles.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]
    )

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (<Spinner />) : (
                    <CategoryContainer>
                        {
                            products && products.map((product) => {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                )
                            })
                        }
                    </CategoryContainer>
                )
            }
        </Fragment>
    )
}

export default Category;