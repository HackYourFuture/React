import React from 'react'
import {inject, observer} from 'mobx-react';
import Button from './Button'
import TextField from './TextField'

@inject('taskStore')
@observer

export default class TaskBody extends React.Component {
  state = {
        newTodo: this.props.task
    };
  handleTodoChange = event => {
    this.setState({newTodo: event.target.value})
};
  handleSaveEdit = (save) => {
  this.props.onSaveEdit(this.state.newTodo);
  this.setState({newTodo: this.state.newTodo});
};

  render() {
        return(
            <div className = "AppTask">
              {!this.props.isEditing && this.renderViewing()}
              {this.props.isEditing && this.renderEditing()}
            </div>
        )
    }
  
  renderViewing() {
    return (
    <div className = 'AppTask-viewing'>
        <div>{this.props.task}</div>
        <div>
        <Button label = 'Edit' onClick = {this.props.onEdit}/>
        <Button label = 'Remove' onClick = {this.props.onRemove}/>
        </div>
    </div>
    )
}
    renderEditing() {
      return ( 
        <div className = "AppTask-editing">       
        <div>
        <TextField 
        value = {this.state.newTodo}
        onChange = {this.handleTodoChange}
        />
        </div>
        <div>
          <Button 
           label = 'Save' 
           onClick = {this.handleSaveEdit}
           disabled = {this.state.newTodo.trim() === ''}
           />
       <Button label = 'Cancle' onClick = {this.props.onCancleEdit}/>
   </div>
</div>       
   ) ;
}

}