import { createSelector } from "reselect";

// Create selector layer 1 that will always query the state
const selectCategoryReducer = (state) => state.categories;

// Create selector layer 2 that will use queried state and return the memoized version if nothing has changed
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
)

// Create selector layer 3 that will use the cached categoriesMap as long as the state.categories.categories value has not changed
export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
  console.log('category selector fired');
  return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
});