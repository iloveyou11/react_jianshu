import React,{Component} from 'react'
import PropTypes from 'prop-types' // prop-types作父组件传值的类型校验
import store from './store'
import {getDeleteItemAction} from './store/actionCreator'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    // 每次父组件的数据改变时，父组件的render函数就会被执行，其子组件的render函数也会被执行
    // 因此会降低性能，可以采用shouldComponentUpdate来解决
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.item!==this.props.item){
            return true
        }else{
            return false
        }
    }

    handleClick(){
        const index=this.props.index
        //解构赋值，相当于
        //const handleItemDelete=this.props.handleItemDelete
        //const index=this.props.index

        // const {handleItemDelete,index}=this.props 
        // handleItemDelete(index)

        // 使用redux
        // const action={
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action=getDeleteItemAction(index)
        store.dispatch(action)
    }

    render(){
        const {item}=this.props
        return(
            <div onClick={this.handleClick}>{item}</div>
        )
    }
}

// propTypes进行参数类型校验，更多类型详见https://reactjs.org/docs/typechecking-with-proptypes.html
TodoItem.propTypes={
    item:PropTypes.string,
    handleItemDelete:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
}

// defaultProps表示父组件未传入属性时取的默认值
// TodoItem.defaultProps={
//     item:'nothing'
// }

export default TodoItem