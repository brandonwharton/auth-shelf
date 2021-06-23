Order of Operations

To Dos

Get Route
- [ ] Client Side
    - [ ] useSelector to get our reducer data
    - [ ] useDispatch to dispatch a FETCH to saga
    - [ ] .map() to display data
        - [ ] Done in a ShelfItem component
    - [ ] useEffect to GET on page load
- [ ] Sagas/Reducers
    - [ ] make shelf.saga.js / shelf.reducer.js
    - [ ] shelf saga
        - [ ] Takes 'FETCH_SHELF' action
        - [ ] axios GET @ '/api/shelf'
        - [ ] yields 'SET_SHELF' action
    - [ ] shelf reducer
        - [ ] initial state = []
        - [ ] 'SET_SHELF' saves array state data
- [ ] Router
    - [x] GET from item table
    - [ ] make sure auth is included here



Post Route










Data Model

rows in item table(
    id: 
    description: mandatory,
    image_url: optional,
    user_id: INT REFERENCES "user"
)