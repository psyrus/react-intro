// 

import { useState } from "react";
import { useContext } from "react";
import CategoryItemModifier from "../../components/category-item-modifier/category-item-modifier.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { UserContext } from "../../contexts/user.context";

const Admin = () => {
    const { categoriesMap, updateItemHandler } = useContext(CategoriesContext);
    const { currentUser } = useContext(UserContext);
    const [selectedCategory, setCategory] = useState(null);
    const [selectedItem, setItem] = useState(null);

    if (!(currentUser && currentUser.isAdmin)) {
        return (
            <div>This page is only accessible to administrators</div>
        )
    }

    const addNewItemHandler = (categoryName) => {
        setCategory(categoryName);
        setItem(null);
    }

    const editItemHandler = (category, item) => {
        setCategory(category);
        setItem(item);
    }

    const updateCategory = (categoryName, updateTargetItem) => {
        updateItemHandler(categoryName, updateTargetItem);
        closeHandler();
    }

    const closeHandler = () => {
        setCategory(null);
        setItem(null);
    }

    return (
        <div>
            <h1>Admin</h1>
            <div className="admin-float-right"><CategoryItemModifier category={selectedCategory} item={selectedItem} updateCallback={updateCategory} closeCallback={closeHandler} /></div>
            <div className="admin-float-left">
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

        </div>
    )
}

export default Admin;