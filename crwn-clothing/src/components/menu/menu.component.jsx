import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import DirectoryItem from '../directory-item/directory-item.component';
import { CategoriesContainer } from './menu.styles';

const Menu = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const categories = Object.keys(categoriesMap);
    return (
        <CategoriesContainer>
            {categories.map((categoryName) => {
                return <DirectoryItem name={categoryName} item={categoriesMap[categoryName][0]} key={categoryName}></DirectoryItem>;
            })}
        </CategoriesContainer>
    );
}

export default Menu;