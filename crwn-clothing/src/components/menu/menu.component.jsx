import "./menu.styles.scss"
import CategoryItem from '../category-item/category-item.component';

const Menu = (props) => {
    const { categories } = props
    return (<div className='categories-container'>
        {categories.map((category) => {
            return <CategoryItem item={category} key={category.id}></CategoryItem>;
        })}
    </div>);
}

export default Menu;