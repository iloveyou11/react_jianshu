import React, { Component,Fragment } from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
//导入样式文件
import store from './store'
import {GlobalStyle} from './style'
import {GlobalIconStyle} from './statics/iconfont/iconfont'
 
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <GlobalIconStyle/>
                    <Header/>
                </Fragment>
            </Provider>
            
        )
    }
}
 
export default App;