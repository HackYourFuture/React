import React from 'react';
import {inject, observer} from 'mobx-react';
import Description from './Description';
import Time from './Time';
import Title from './Title';
import Button from './button';
import TextField from './TextField';

@inject('todos')@observer
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

    const {todo, handleDoneToggle, onEditClick, onRmoveClick } = this.props;

        return (

            <li className="Todo">

                <div className="Remove">
                    <Button 
                      label="remove"
                      onClick={() => {onRmoveClick(todo._id)}}
                    />
                </div>

                <div className="Edit">
                    <Button 
                      label="edit"
                      onClick={() => {onEditClick(todo._id)}}
                      />
                </div>

                <div className="Checkbox">
                    <input onChange={() => handleDoneToggle(todo._id)} 
                    checked={todo.done}
                    type="checkbox" 
                    />
                </div>

                <div className="Todo-Description">
                    <Description 
                    description={todo.description}
                    />
                </div> 
                
                <div className="Add-Time">
                    <div>
                        <div className="Add-Deadline-Title">
                           <Title disabled={this}
                            titleText={"Deadline is "}
                            />
                        </div>
                        <div className="Add-Deadline-Time">
                            <Time 
                            time={todo.deadline}
                            /> 
                        </div>
                    </div>
                </div> 
            </li>
        )
    };


    renderEditing() {
        return (
          <div>
            <div>
              {/* this is for description */}
              <TextField
                multiline
                value={this.props.description}      
                onChange={this.handleTextChange} 
              />
              {/* this is for deadline date */}
              <TextField value={this.props.deadline}      
                onChange={this.handleDeadlineChange} 
            
              />
            </div>
            <div className="edit-mode-buttons">
              <Button
                label='Save'
                onClick={this.handleSaveClick}
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