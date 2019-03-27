import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd';

// class TodoListUI extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <div style={{ marginLeft: '10px', marginTop: '10px' }}>
//                     <label htmlFor="inputArea">输入内容：</label>
//                     <Input
//                         style={{ width: '300px', marginRight: '10px' }}
//                         id="inputArea"
//                         className='input'
//                         value={props.inputValue}
//                         onChange={props.handleInputChange}
//                         placeholder="todo"
//                     // ref={input=>{this.input=input}}
//                     />
//                     <Button onClick={props.handleBtnClick} type="primary">提交</Button>
//                 </div>
//                 <List
//                     style={{ marginTop: '10px', width: '500px' }}
//                     bordered
//                     dataSource={props.getListItem()}
//                     renderItem={item => (<List.Item>{item}</List.Item>)}
//                 />
//             </Fragment>
//         )
//     }
// }


// 改为无状态组件
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <label htmlFor="inputArea">输入内容：</label>
                <Input
                    style={{ width: '300px', marginRight: '10px' }}
                    id="inputArea"
                    className='input'
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                    placeholder="todo"
                // ref={input=>{this.input=input}}
                />
                <Button onClick={props.handleBtnClick} type="primary">提交</Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '500px' }}
                bordered
                dataSource={props.getListItem()}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </Fragment>
    )
}

export default TodoListUI