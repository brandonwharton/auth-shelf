function* postItem() {
    yield takeEvery('POST_ITEM')
}

export default postItem;