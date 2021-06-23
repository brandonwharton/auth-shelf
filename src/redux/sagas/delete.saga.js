import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action) {
    try {
        console.log(action.payload);
        yield axios.delete(`/api/shelf/${action.payload.id}`, action.payload.user_id)
        // refresh DOM
        yield put({type: 'FETCH_SHELF'});
    } catch (err) {
        console.log('REMOVE_ITEM:', err)
    }
}

function* deleteSaga() {
    yield takeLatest('REMOVE_ITEM', deleteItem);
}

export default deleteSaga;