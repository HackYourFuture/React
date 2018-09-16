import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import ListHeader from './components/ListHeader';
import List from './components/List';
import Checkbox from './components/Checkbox';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import InputField from './components/InputField';
import {toJS} from 'mobx';

@inject('TodoList')
@observer
class App extends Component {
  
  constructor(props){
    super(props);
    this.props.TodoList.getTodo();
  }

  handleChecked = (id) => {
    this.props.TodoList.checkAsDone(id);
  };

  handleSubmit = () => {
    this.props.TodoList.postTodo();
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
  }

  handleDescriptionChange = (newDescription) => {
    this.props.TodoList.addNewDescription(newDescription);
  }

  handleDeadLineChange = (newDeadline) => {
    this.props.TodoList.addNewDeadline(newDeadline);
  }

  handleRemove = (id) => {
    this.props.TodoList.removeTodo(id);
  }

  handleEdit = (id) => {
    this.props.TodoList.editTodo(id);
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
  }

  handleUpdate = (id) => {
    this.props.TodoList.updateTodo(id);
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
  }

  handleCancel = (id) => {
    this.props.TodoList.cancelTodo(id);
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
  }

  render() {
    if(this.props.TodoList.state === 'done') {
      console.log("this.props.TodoList.getTodo(): ", toJS(this.props.TodoList.items));
    }
    return (
      <React.Fragment>
          <ListHeader className="todo-list" Title="Todo List" />
        <div className="new-input">
          <InputField
            type="text"
            label="Description:"
            placeholder="enter description"
            value={this.props.TodoList.newItem.newDescription}
            handleChange={this.handleDescriptionChange}
          />
          <InputField
            type="datetime-local"
            label="Deadline:"
            value={this.props.TodoList.newItem.newDeadline}
            handleChange={this.handleDeadLineChange}
          />
          <Button 
            type="submit" 
            action="Add" 
            handleClick={this.handleSubmit} 
          />
        </div>
        <List
          title="todo-list"
          content={toJS(this.props.TodoList.items).map(item => (
            <div key={"wrapper" + item._id}>
              <Checkbox
                type="checkbox"
                done={item.done}
                handleChecked={this.handleChecked}
                id={item._id}
              />
              <TodoItem
                id={item._id}
                contentEditable={item.editable}
                description={item.description}
                date={item.deadline}
                newDescription={this.props.TodoList.newItem.newDescription}
                newDate={this.props.TodoList.newItem.newDeadline}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDeadLineChange={this.handleDeadLineChange}
              />
              <Button
                key={"edit" + item._id}
                id={item._id}
                action="Edit"
                handleClick={this.handleEdit}
                className="show"
              />
              <Button
                key={"update" + item._id}
                id={item._id}
                action="update"
                handleClick={this.handleUpdate}
                className={!item.editable ? "hide" : "show"}
              />
              <Button
                key={"cancel" + item._id}
                id={item._id}
                action="Cancel"
                handleClick={this.handleCancel}
                className={!item.editable ? "hide" : "show"}
              />
              <Button
                key={"remove" + item._id}
                id={item._id}
                action="Remove"
                handleClick={this.handleRemove}
                className="show"
              />
            </div>
          ))}
        />
        {this.props.TodoList.state === 'error' && <p className='error'>Something went wrong</p>}
      </React.Fragment>
    );
  }
}

export default App;
        