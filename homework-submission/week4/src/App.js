import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import ListHeader from './components/ListHeader';
import List from './components/List';
import Button from './components/Button';
import InputField from './components/InputField';
import TodoList from './stores/TodoList';

@inject('TodoList')
@observer
class App extends Component {
  
  handleChecked = (id) => {
    this.props.TodoList.checkAsDone(id);
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  };

  handleSubmit = () => {
    this.props.TodoList.addTodo();
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  }

  handleDescriptionChange = (newDescription) => {
    this.props.TodoList.addNewDescription(newDescription);
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  }

  handleDeadLineChange = (newDeadline) => {
    this.props.TodoList.addNewDeadline(newDeadline);
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  }

  handleRemove = (id) => {
    this.props.TodoList.removeTodo(id);
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  }

  handleEdit = (id) => {
    this.props.TodoList.editTodo(id);
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  }

  handleUpdate = (id) => {
    this.props.TodoList.updateTodo(id);
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
    localStorage.setItem("items", JSON.stringify(this.props.TodoList.items));
  }

  handleCancel = (id) => {
    this.props.TodoList.cancelTodo(id);
    this.props.TodoList.resetNewDescription();
    this.props.TodoList.resetNewDeadline();
    localStorage.setItem("newDescription", JSON.stringify(this.props.TodoList.newItem.newDescription));
    localStorage.setItem("newDeadline", JSON.stringify(this.props.TodoList.newItem.newDeadline));
  }

  componentDidMount() {
    let itemsCopy = localStorage.items;

    if (itemsCopy !== undefined) {
      TodoList.items = JSON.parse(itemsCopy);
    }
  }

  render() {
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
            type="date"
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
          content={this.props.TodoList}
        />
      </React.Fragment>
    );
  }
}

export default App;
        