# Goals

- Ability to click one of the products in a shop page (add to cart) button and have that added to the cart
- If an item already exists, it should display how many items have been added of that type
- If it doesn't already exist, add the new product to the list
- Create a "clear cart" button that removes all items

## Conceptualized approach

- The cart now has a state - Could add the list of products in there as a hashtable
  - To keep the order, probably best to stick with an array even though it's less efficient for lookups/changes
- The "clear cart" button exists within the cart component, but everything else (add to cart) is coming from the shop page

## Implementation steps

- Add an array to the cart's state which is an array of product references
  - Product Ref is available from the ProductsProvider/ProductContext
- Add a clear-cart button to the cart component that has a click handler
  - This should simply invoke a function in the cart to purge the products array
- Need to ensure that the add to cart buttons have a click handler
  - These should invoke a function on the cart with the additional item and it should take care of duties there
    - This is why I liked the object based approach, it's much easier to conceptualize these breakdowns of responsibility...
