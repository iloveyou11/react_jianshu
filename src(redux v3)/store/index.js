import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
import mySaga from './sagas'

// 不使用中间件
// const store = createStore(reducer)

// 使用redux-thunk中间件
// const store = createStore(
//     reducer, /* preloadedState, */
//     applyMiddleware(thunk)
// );

// 使用redux-saga中间件
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)


export default store