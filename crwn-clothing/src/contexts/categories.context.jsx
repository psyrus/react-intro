import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments, updateCategoryItem } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: [],
});

// I don't know what the parent object to the "children" property is
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap)
    }

    useEffect(() => {
        getCategoriesMap();
    }, []);

    const updateItemHandler = async (categoryName, item) => {
        await updateCategoryItem(categoryName, item);
        getCategoriesMap();
    }
    const value = { categoriesMap, updateItemHandler };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}