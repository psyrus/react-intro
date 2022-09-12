import "./menu.styles.scss"
import DirectoryItem from '../directory-item/directory-item.component';

const Menu = (props) => {
    const { categories } = props
    return (<div className='categories-container'>
        {categories.map((category) => {
            return <DirectoryItem item={category} key={category.id}></DirectoryItem>;
        })}
    </div>);
}

export default Menu;