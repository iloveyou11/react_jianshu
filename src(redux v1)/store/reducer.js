const defaultState = {
    inputValue: '',
    list: []
}

export default (preState = defaultState, action) => {
    if (action.type === 'handle_input_change') {
        const newState = JSON.parse(JSON.stringify(preState))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'handle_btn_change') {
        const newState = JSON.parse(JSON.stringify(preState))
        newState.list.push(preState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return preState
}