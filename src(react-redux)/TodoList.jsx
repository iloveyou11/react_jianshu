import React,{Component} from 'react'
import {connect} from 'react-redux'

// class TodoList extends Component{
//     render(){
//         const {inputValue,list,handleInputChange,handleBtnClick}=this.props
//         return(
//             <div>
//                 <div>
//                     <input 
//                         type="text" 
//                         value={inputValue}
//                         onChange={handleInputChange}
//                     />
//                     <button onClick={handleBtnClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item,index)=>{
//                             return <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// 只有render方法，改写为无状态组件，可以提高性能
const TodoList=(props)=>{
    const {inputValue,list,handleInputChange,handleBtnClick}=props
        return(
            <div>
                <div>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
}


const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputChange(e){
            const action={
                type:'change_input_action',
                value:e.target.value
            }
            dispatch(action)
        },

        handleBtnClick(){
            const action={
                type:'add_item'
            }
            dispatch(action)
        }
    }
}

// TodoList仅仅是一个UI组件，connect方法将其与一系列的属性与方法做关联，返回的内容就是一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)