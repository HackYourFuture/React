import React, { Component } from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
import List from './components/List';
import Button from './components/Button';
import InputField from './components/InputField';
import Checkbox from "./components/Checkbox";
import TodoItem from "./components/TodoItem";
import TodoItems from './sources/todoItems.json';


class App extends Component {
  state = {
    items: localStorage.items !== undefined ? JSON.parse(localStorage.items) : TodoItems,
    newId: localStorage.items !== undefined ? (JSON.parse(localStorage.items).length + 1) : (TodoItems.length + 1),
    newDescription: '',
    newDeadline: '',
  }

  handleChecked = (id) => {
    let newState = Object.assign({}, this.state);
    const indexOfItem = newState.items.findIndex(item => item.id === id);
    if (indexOfItem >= 0) {
      newState.items[indexOfItem].done === false
        ? (newState.items[indexOfItem].done = true)
        : (newState.items[indexOfItem].done = false);
    }
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState({ items: newState.items });
  };

  handleSubmit = () => {
    const newItem = { 
      id: this.state.newId,
      description: this.state.newDescription,
      deadline: this.state.newDeadline,
      done: false
    }

    let newState = this.state;

    newState.items.push(newItem);
    newState.newDescription = '';
    newState.newDeadline = '';
    
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState(newState);
  }

  handleDescriptionChange = (newDescription) => {
    let newState = Object.assign({}, this.state);
    newState.newDescription= newDescription;
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState(newState);
  }

  handleDeadLineChange = (value) => {
    let newState = Object.assign({}, this.state);
    newState.newDeadline = value;
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState(newState);
  }

  handleRemove = (id) => {
    let newState = Object.assign({}, this.state);
    id = parseInt(id, 10);
    newState.items = newState.items.filter(item => item.id !== id);
    console.log(newState);
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState({ items: newState.items });
  }

  handleEdit = (id) => {
    console.log(id);
    let newState = Object.assign({}, this.state);
    id = parseInt(id, 10);
    const indexOfItem = newState.items.findIndex(item => item.id === id);
    console.log(indexOfItem);
    if (indexOfItem >= 0) {
      newState.items[indexOfItem].editable === false
        ? (newState.items[indexOfItem].editable = true)
        : (newState.items[indexOfItem].editable = true);
    }
    console.log(newState.items[indexOfItem]);
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState({ items: newState.items });
  }

  handleCancel = (id) => {
    console.log(id);
    let newState = Object.assign({}, this.state);
    id = parseInt(id, 10);
    const indexOfItem = newState.items.findIndex(item => item.id === id);
    console.log(indexOfItem);
    if (indexOfItem >= 0) {
      newState.items[indexOfItem].editable === true
        ? (newState.items[indexOfItem].editable = false)
        : (newState.items[indexOfItem].editable = false)
    }
    console.log(newState);
    localStorage.setItem("items", JSON.stringify(newState.items));
    this.setState({ items: newState.items });
  }

  componentDidMount() {
    let itemsCopy = localStorage.items;

    if (itemsCopy !== undefined) {
      this.setState({ items: JSON.parse(itemsCopy) });
    }
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src="https://russellinvestments.com/-/media/images/au/tiles/todolist.png" className="App-logo" alt="logo" />
          <ListHeader className="todo-list" Title="Todo List" />
        </header>
        <div className="new-input">
          <InputField type="text" label="Enter description:" value={this.state.description} handleChange={this.handleDescriptionChange} />
          <InputField type="date" label="Deadline:" value={this.state.deadline} handleChange={this.handleDeadLineChange} />
          <Button type="submit" action="Add" handleClick={this.handleSubmit} />
        </div>
        <List title="todo-list" content={this.state.items.map(item => (
          <div key={"wrapper" + item.id}>
            <Checkbox
              type="checkbox"
              done={item.done}
              handleChecked={this.handleChecked}
              id={item.id}
            />
            <TodoItem
              id={item.id}
              contentEditable={item.editable}
              description={item.description}
              date={item.deadline}
            />
            <Button
              key={"edit" + item.id}
              id={item.id}
              action="Edit"
              handleClick={this.handleEdit}
              className="show"
            />
            <Button
              key={"cancel" + item.id}
              id={item.id}
              action="Cancel"
              handleClick={this.handleCancel}
              className={item.editable === false ? "hide" : "show"}
            />
            <Button
              key={"remove" + item.id}
              id={item.id}
              action="Remove"
              handleClick={this.handleRemove}
              className="show"
            />
          </div>
        ))} 
        />
      </React.Fragment>
    );
  }
}

export default App;
