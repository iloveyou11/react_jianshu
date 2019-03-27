import React,{Component} from 'react'
import store from './store'

import axios from 'axios'
import TodoItem from './TodoItem.jsx'
import TodoListUI from './TodoListUI'
import {getInputChangeAction,getAddItemAction,initListAction,getInitList} from './store/actionCreator'


class Todolist extends Component{
    constructor(props){
        super(props)
        // 当组件的state或props值发生变化时，render函数会自动执行
        // this.state={
        //     inputValue:'',
        //     list:[]
        // }
        // 直接取store中的数据
        this.state=store.getState()
    
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        this.handleItemDelete=this.handleItemDelete.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        
        store.subscribe(this.handleStoreChange)
    }

    handleInputChange(e){
        // 原始写法
        // this.setState({
        //     inputValue:value
        // })

        // 新版本写法
        // react推荐采用函数的形式书写，返回对象，采用异步提高性能，同时要注意先保存inputValue，否则
        const value=e.target.value //添加ref后，e.target可以使用this.input替换
        // this.setState(()=>({
        //     inputValue:value
        // }))

        // 使用redux
        // const action={
        //     type:CHANGE_INPUT_VALUE,
        //     value:value
        // }
        const action=getInputChangeAction(value)
        store.dispatch(action)
    }

    handleBtnClick(){
        // 原始写法
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })

        // 改进写法
        // this.setState((prevState)=>({
        //     list:[...prevState.list,prevState.inputValue],
        //     inputValue:''
        // }))
        
        // 异步函数，第二个参数可以传入回调函数
        // this.setState((prevState)=>({
        //     list:[...prevState.list,prevState.inputValue],
        //     inputValue:''
        // }),()=>{
        //     console.log(this.ul.querySelectorAll('div').length)
        // })

        // 使用redux
        // const action={
        //     type:ADD_TODO_ITEM
        // }
        const action=getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index){
        // 原始写法
        // state不允许我们对state做任何改变，因此先拷贝出来，再使用setState作赋值操作
        // const list=[...this.state.list]
        // list.splice(index,1)
        // this.setState({
        //     list:list
        // })

        //改进写法
        this.setState((prevState)=>{
            const list=[...prevState.list]
            list.splice(index,1)
            return {list}
        })
    }

    getListItem(){
        return  this.state.list.map((item,index)=>{
            return(
               <div key={index}> 
                    {/* 注意key值应放在循环最外层的元素上，也可以直接将TodoItem作为最外层元素 */}
                   <TodoItem 
                        item={item} 
                        index={index}
                        handleItemDelete={this.handleItemDelete}
                    />
                    {/* <li 
                        key={index} 
                        onClick={this.handleItemDelete.bind(this,index)}
                        // dangerouslySetInnerHTML={{__html:item}}  不以文本内容输出，如果输入html标签，直接按照格式显示html标签
                    >
                        {item}
                    </li> */}
               </div>
            )
        })
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    // ajax请求放在componentDidMount中，不会有问题，不要放在render函数中，也不建议放在componentWillMount中
    componentDidMount(){
        // axios.get('/list.json')
        //     .then((res) => {
        //         const data = res.data
        //         const action = initListAction(data)
        //         store.dispatch(action)
        //     })
        
        // 使用redux-thunk
        //    const action=getTodoList() //得到的不再是对象，而是函数
        //    store.dispatch(action)

        //使用redux-saga
        const action=getInitList()
        store.dispatch(action)
    }

    render(){
        return  <TodoListUI 
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    getListItem={this.getListItem}
                    list={this.state.list}
                />
           
    }
}

export default Todolist