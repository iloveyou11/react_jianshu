import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreator'
import store from './index'

// generator函数
function* getInitList(action) {
    try {
        const res = yield axios.get('/list.json')
        const action = initListAction(res.data)
        yield put(action)
    } catch (error) {
        console.log(error);

    }
}

// generator函数
function* mySaga() {
    yield takeLatest(GET_INIT_LIST, getInitList);
}

export default mySaga;