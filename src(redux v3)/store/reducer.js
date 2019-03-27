import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '请输入内容',
    list: ['学习react', '学习vue', '学习前端']
}

// reducer的作用是接受原始state和action，返回新的state
// reducer可以接收state,但是绝不能修改state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // 对原始json进行深拷贝,不能直接修改
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    // if (action.type === INIT_LIST_ACTION) {
    //     const newState = JSON.parse(JSON.stringify(state))
    //     newState.list = action.data
    //     return newState
    // }
    return state
}