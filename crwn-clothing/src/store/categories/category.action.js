import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { CATEGORY_ACTION_TYPES } from "./category.types"

export const setCategoriesMap = (categoriesMap) => {
    return {
        type: CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,
        payload: categoriesMap
    }
}

export const refreshCategoriesMap = async () => {
    const dbCategoriesMap = await getCategoriesAndDocuments();
    return setCategoriesMap(dbCategoriesMap);
}