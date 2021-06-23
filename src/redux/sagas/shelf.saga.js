import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf() {
    try{
        const res = yield axios.get('/api/shelf');

        yield put({
            type: 'SET_SHELF',
            payload: res.data,
        });
    } catch (err) {
        console.log('FETCH_SHELF', err);
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf)
}

export default shelfSaga;
