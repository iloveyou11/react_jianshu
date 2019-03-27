import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    render() {
        return (
            <Fragment>
                {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
                {/* 使用react-transition-group来设计样式动画，不直接采用class控制的话，示例如下 */}
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit  //隐藏时删除dom
                    appear={true} //在初次显示时也执行动画，不过css中要添加fade-appear,fade-appear-active类
                    //进入完成时调用
                    onEntered={(el)=>{ 
                        el.style.color='blue'
                    }}
                    //退出完成时调用
                    // onExited={(el) => {
                    //     el.style.color='blue'
                    // }}
                >
                    <div>hello</div>
                </CSSTransition>
                
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment>

        )
    }
}

export default App