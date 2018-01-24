import React from 'react';
import Description from './Description';
import Time from './Time';
import Button from './button';
import TextField from './TextField';

export default class Todo extends React.Component{
   
    state = {
        todoText: '',
        deadline: '',
    };

    componentWillReceiveProps(newProps) {
        if (newProps.isEditing && !this.props.isEditing) {
          this.setState({
              todoText: newProps.text,
              deadline: newProps.deadline,});
        }
    };

    handleTextChange = event => {
        this.setState({todoText: event.target.value});
    };

    handleDeadlineChange = event => {
        this.setState({deadline: event.target.value});
    };

    handleSaveClick = () => {
        const {todoText, deadline } = this.state;
        this.props.onSaveClick(todoText);
        this.setState({todoText: ''});
        this.props.onSaveDateClick(deadline);

    };

    render(){
        return(

            <div className="todoBody">
              {!this.props.isEditing && this.renderViewing()}
              {this.props.isEditing && this.renderEditing()}
            </div>
        )
    };

   renderViewing() {

    const { todo, handleDoneToggle, onEditClick, onRmoveClick } = this.props;

        return (

            <li className="Todo">

                <div className="Remove">
                    <Button 
                      label="remove"
                      onClick={() => {onRmoveClick(todo.id)}}
                    />
                </div>

                <div className="Edit">
                    <Button 
                      label="edit"
                      onClick={() => {onEditClick(todo.id)}}
                      />
                </div>

                <div className="Checkbox">
                    <input onChange={() => handleDoneToggle(todo.id)} 
                    checked={todo.done}
                    type="checkbox" 
                    />
                </div>

                <div className="Todo-Description">
                    <Description task={todo.task}/>
                </div> 
    
                <div className="Add-Time">
                   <Time title={"at "}
                    time={todo.addedTime}
                    /> 
                </div> 

                <div className="Deadline-Time">
                    <Time title={"Deadline is "}
                    time={todo.deadlineTime}/>
                </div>

            </li>
        )
    };


    renderEditing() {
        return (
          <div>
            <div>
              {/* this is for task */}
              <TextField
                multiline
                value={this.state.TodoText}      
                onChange={this.handleTextChange} 
              />
              {/* this is for deadline date */}
              <TextField value={this.state.TodoText}      
                onChange={this.handleDeadlineChange} 
            
              />
            </div>
            <div className="edit-mode-buttons">
              <Button
                label='Save'
                onClick={this.handleSaveClick}
                //disabled is not working at this momment
                //disabled={this.state.TodoText.trim() === ''}
              />
              <Button
                label='Cancel'
                onClick={this.props.onCancelEditClick}
              />
            </div>
          </div>
        )
    };

};