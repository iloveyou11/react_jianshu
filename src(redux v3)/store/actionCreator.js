import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'
import store from './index'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
        type: DELETE_TODO_ITEM,
        index
    })
    // 原始
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// 使用redux-saga，使用sagas文件统一处理异步函数
export const getInitList = () => ({
    type: GET_INIT_LIST
})

// 使用redux-thunk，将异步操作代码放入其中，可以直接返回函数
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/list.json')
//             .then((res) => {
//                 const data = res.data
//                 const action = initListAction(data)
//                 dispatch(action)
//             })
//     }
// }