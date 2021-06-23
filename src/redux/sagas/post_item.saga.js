import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// post function with  post post
function* postItem(action) {
    try{
        yield axios.post('/api/shelf', action.payload);

        yield put({type: 'FETCH_SHELF'});
    } catch (error) {
        console.log('Error with postItem function', error);
    }
}

function* postItemSaga() {
    yield takeLatest('POST_ITEM', postItem);
}

export default postItemSaga;