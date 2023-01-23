import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) => {
    return getCategoriesSuccess(categoriesArray);
}

export const getCategoriesStart = () => {
    return {
        type: CATEGORY_ACTION_TYPES.GET_CATEGORIES_START,
        payload: null,
    }
}

export const getCategoriesSuccess = (categoriesArray) => {
    return {
        type: CATEGORY_ACTION_TYPES.GET_CATEGORIES_SUCCESS,
        payload: categoriesArray,
    }
}

export const getCategoriesFailed = (error) => {
    return {
        type: CATEGORY_ACTION_TYPES.GET_CATEGORIES_FAILED,
        payload: error,
    }
}
