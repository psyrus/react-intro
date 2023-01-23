import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles";
import { CategoryPreviewContainer, LogoContainer, Preview, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <LogoContainer to={title}>
                <Title>
                    {title.toUpperCase()}
                </Title>
            </LogoContainer>
            <Preview>
                {
                    products.filter((item, idx) => idx < 4).map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </Preview>
        </CategoryPreviewContainer>
    )
};

export default CategoryPreview;