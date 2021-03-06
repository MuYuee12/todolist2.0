import React from "react";
import {Button, Input, List} from "antd";

const TodoListUI = (props)=>{
  return(
    <div style={{marginTop:'10px',marginLeft:'10px'}}>
      <Input
        value={props.inputValue}
        placeholder="Todo Info"
        style={{width:'300px',marginRight:'10px'}}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{width:'300px',marginTop:'10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
          <List.Item onClick={()=>{props.handleItemDelete(index)}}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}


// class TodoListUI extends Component{
//   render(){
//     return(
//         <div style={{marginTop:'10px',marginLeft:'10px'}}>
//           <Input
//             value={this.props.inputValue}
//             placeholder="Todo Info"
//             style={{width:'300px',marginRight:'10px'}}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//           <List
//             style={{width:'300px',marginTop:'10px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item,index) => (
//               <List.Item onClick={()=>{this.props.handleItemDelete(index)}}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//     )
//   }
// }
export default TodoListUI;