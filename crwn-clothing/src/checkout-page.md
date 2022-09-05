# Checkout Page

## Goals

- Page displays current cart contents
- Each item is presented with image, description, quantity, price
- Each item has a quantity increase and decrease function
- Each item has a remove button that takes it out of the cart
- At the bottom of the page there is a total cost for the cart

## Implementation

- Create a checkout route
- Add checkout route to navigation
- Display current cart contents dump
- Create a component to render each item
  - Does it need a parent component for the list?
  - Probably not for the first part...
- Add the functionality to add vs remove items from cart
- Separate the concept of quantity = 0 from "removed from cart"
