Order of Operations

To Dos

Get Route
- [x] Client Side
    - [x] useSelector to get our reducer data
    - [x] useDispatch to dispatch a FETCH to saga
    - [x] .map() to display data
        - [x] Done in a ShelfItem component
    - [x] useEffect to GET on page load
- [x] Sagas/Reducers
    - [x] make shelf.saga.js / shelf.reducer.js
    - [x] shelf saga
        - [x] Takes 'FETCH_SHELF' action
        - [x] axios GET @ '/api/shelf'
        - [x] yields 'SET_SHELF' action
    - [x] shelf reducer
        - [x] initial state = []
        - [x] 'SET_SHELF' saves array state data
- [x] Router
    - [x] GET from item table
    - [x] make sure auth is included here

Delete Route
- [x] Client Side
    - [x] Delete button for each item 
        - [x] Payload needs to contain item's id and user_id
        - [x] 'REMOVE_ITEM'
- [ ] saga
    - [ ] delete.saga.js
    - [ ] listen for 'REMOVE_ITEM'
    - [ ] route for '/api/shelf/${id} or something similar
    - [ ] payload of user_id
- [ ] shelf.router
    - [ ] DELETE route
        - [ ] req.params.id for the route
        - [ ] req.body contains user_id info from client
        - [ ] need logic to compare to req.user.id or whatever
        





Post Route










Data Model

rows in item table(
    id: 
    description: mandatory,
    image_url: optional,
    user_id: INT REFERENCES "user"
)