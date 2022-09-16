# Self defined feature: Add Products

## Summary

- Admin users are able to see an additional path called "Dashboard"
- In dashboard there is a page to add new products to existing categories
  - Ideally there is a way to also a way to add new categories...
- Select category via dropdown box
- It should show the existing products as a summary list
- Above summary list should be a form to add a new item to that category
- Adding it should automatically update the db and be reflected on the users' front end

## Features required

- Definition of an admin user in the DB
- Means to check if current user is an admin
- Additional path (/admin) with page component
  - Component to do the form (maybe just part of the path component)
- Some interface layer for the database updates
- Should have the ability to edit existing items...
  - Hopefully this could leverage the existing "add" functionality