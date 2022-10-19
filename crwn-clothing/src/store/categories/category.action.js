import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { CATEGORY_ACTION_TYPES } from "./category.types"

export const setCategories = (categoriesArray) => {
    return getCategoriesSuccess(categoriesArray);
    // return {
    //     type: CATEGORY_ACTION_TYPES.SET_CATEGORIES,
    //     payload: categoriesArray
    // }
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

export const refreshCategories = async () => {
    const dbCategoriesArray = await getCategoriesAndDocuments();
    return setCategories(dbCategoriesArray);
}

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(getCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(getCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(getCategoriesFailed(error));
    }
}