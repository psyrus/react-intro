import DirectoryItem from '../directory-item/directory-item.component';
import { CategoriesContainer } from './menu.styles';

const Menu = (props) => {
    const { categories } = props
    return (
        <CategoriesContainer>
            {categories.map((category) => {
                return <DirectoryItem item={category} key={category.id}></DirectoryItem>;
            })}
        </CategoriesContainer>
    );
}

export default Menu;