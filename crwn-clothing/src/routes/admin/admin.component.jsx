// 

import { useState } from "react";
import { useContext } from "react";
import CategoryItemModifier from "../../components/category-item-modifier/category-item-modifier.component";
import { CategoriesContext } from "../../contexts/categories.context";

const Admin = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [ selectedCategory, setCategory ] = useState(null);
    const [ selectedItem, setItem ] = useState(null);
    // Render existing items in each category
    // Render a form
    // Form should add a new product to the given category

    const addNewItemHandler = (categoryName) => {
        console.log(`Add New Item for: ${categoryName}`)
        setCategory(categoryName);
        setItem(null);
    }

    const editItemHandler = (category, item) => {
        console.log(`edit item: ${item.name} in category ${category}`)
        setCategory(category);
        setItem(item);
    }
    return (
        <div>
            <h1>Admin</h1>
            <CategoryItemModifier category={selectedCategory} item={selectedItem}/>
            {
                categoriesMap &&
                Object.keys(categoriesMap).map(categoryName => {
                    return (
                        <div key={categoryName}>
                            <h3>{categoryName}</h3>
                            <ul>
                                {
                                    categoriesMap[categoryName].map(item => {
                                        return (
                                            <li key={item.id}>
                                                <span onClick={() => editItemHandler(categoryName, item)}>{item.name}</span>
                                            </li>
                                        )
                                    })

                                }
                            </ul>
                            <button onClick={() => addNewItemHandler(categoryName)}>Add new item to {categoryName}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Admin;