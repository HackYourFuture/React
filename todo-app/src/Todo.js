import React from 'react';
import Description from './Description';
import Deadline from './Deadline';
import Button from './button';
import TextField from './TextField';

export default class Todo extends React.Component{
   
    state = {
        todoText: '',
    };

    componentWillReceiveProps(newProps) {
        if (newProps.isEditing && !this.props.isEditing) {
          this.setState({todoText: newProps.text});
        }
    };

    handleTextChange = event => {
        this.setState({todoText: event.target.value});
    };

    handleSaveClick = () => {
        this.props.onSaveClick(this.state.todoText);
        this.setState({todoText: ''});
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

    const { todo, handleDoneToggle, onEditClick } = this.props;

        return (

            <li className="Todo">

                <div className="Remove">
                    <Button 
                      label="remove"
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
    
                <div className="Todo-Deadline">
                    <Deadline time={todo.time}/>
                </div> 

            </li>
        )
    };


    renderEditing() {
        return (
          <div>
            <div>
              <TextField
                multiline
                value={this.state.TodoText}      
                onChange={this.handleTextChange} 
              />
            </div>
            <div>
              <Button
                label='Save'
                onClick={this.handleSaveClick}
                //disabled is not working
                disabled={this.state.TodoText.trim() === ''}
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