## Summary
    UI Technology used : React, react-bootstrap, bootstrap css.
    Client app will run under port 3000 and proxied to server app.
    Backend server app will run under port 3001.
    No seperate entity for client and server . Everything will execute under scripts of root level package json.

## changes that added/updated
    1. Add new folder for client , and updated react to pickup static content from src/client.
    2. Added new isolated components for widgtes in UI and used react-bootstrap in built components and beautified the page bootstrap css.
    3. Added few dev dependencies to integrate node with react.
    4. Favicon referred from public folder as suggested in instructions.
    5. Added new route *getListOfUniqueItemsHandler* for  Items dropdown  values.
    6. updated logic for  *getListOfAgesOfUsersWith* to filter data based on selected item.
    7. Exception handling in all routes.
    8. Couple of other changes where required

## how to start app
    1. npm install
    2. npm start
    3. access localhost:3000


