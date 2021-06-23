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
- [ ] Router
    - [x] GET from item table
    - [ ] make sure auth is included here



Post Route
Backend 
    -post route skeleton
    -verify authentication
    -store user id

Frontend
    -form to take in data
    -dispatch for form data to saga
    -get through post then get "get call" from other group











Data Model

rows in item table(
    id: 
    description: mandatory,
    image_url: optional,
    user_id: INT REFERENCES "user"
)