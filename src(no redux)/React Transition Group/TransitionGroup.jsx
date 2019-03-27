import React, { Component, Fragment } from 'react'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem() {
        this.setState((prevState)=>{
            return{
                list:[...prevState.list,'item']
            }
        })
    }

    render() {
        return (
            <Fragment>
                {/* 多个元素动画，使用TransitionGroup配合CSSTransition使用 */}
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <CSSTransition
                                    timeout={1000}
                                    classNames="fade"
                                >
                                    <div key={index}>{item}</div>
                                </CSSTransition>
                                
                            )
                        })
                    }
                </TransitionGroup>
               
                <button onClick={this.addItem}>add</button>
            </Fragment>

        )
    }
}

export default App