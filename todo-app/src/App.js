import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        description: "Todo #1",
        done: false,
        toDoId: 1,
        action: "Edit" /*This determines the function of the primary buttons for each todo,
        the available functions are : (Edit, Save or Delete)*/
      }],
      nextId: 2,
      clearIsClicked: false /* This changes the function of the Add todo button
      from Add to Clear*/
    };
  }
  render() {
    const todosList = this.state.todos.map((todoListItem, todoIndex) =>
      <li key= {todoListItem.toDoId} style= {todoListItem.done ?
        {backgroundColor : "green", display: "flex"} :
        {backgroundColor : "red", display: "flex"}}>
          {todoListItem.action === "Save" ?
            <input
              id= {"text" + todoListItem.toDoId}
              type= "text"
              placeholder= "Please rewrite here the description for the current todo"
              style= {{flex: "5 0 0"}}
              value= {todoListItem.descriptionContainer}
              onChange= {this.handleUpdateInputText}/> :
            <span style= {{flex: "5 0 0"}}>
              {todoListItem.action === "Edit" ?
                (todoIndex + 1) + " - " + todoListItem.description :
                "Are you sure that you want to permanently delete the current todo?"}
            </span>
          }
          {todoListItem.action === "Edit" ?
            <input
              id= {"check" + todoListItem.toDoId}
              type="checkbox"
              checked = {todoListItem.done}
              onChange={this.handleDoneTodo}/> : null
          }
          {todoListItem.action === "Edit" ?
            <span>done</span> : null
          }
          <button
            id= {"primaryBTN" + todoListItem.toDoId}
            style= {{flex: "1 0 0"}}
            onClick= {this.handlePrimaryBTN}>
              {todoListItem.action}
          </button>
          <button
            id= {"secondaryBTN" + todoListItem.toDoId}
            style= {{flex: "1 0 0"}}
            onClick= {this.handleSecondaryBTN}>
              {todoListItem.action === "Edit" ? "Delete" : "Cancel"}
          </button>
      </li>);
    return (
      <div>
        <div key style = {{display: "flex"}}>
          {this.state.clearIsClicked ?
            <span style= {{flex: "6 0 0"}}>
              Are you sure that you want to permanently clear the todo list?
            </span> :
            <input
              id= "newTodoDescription"
              type= "text"
              placeholder= "Please write here the description for the new todo that you want to add"
              style= {{flex: "6 0 0"}}/>
          }
          <button style= {{flex: "1 0 0"}} onClick= {this.handleAddOrClearBTN}>
            {this.state.clearIsClicked ? "Clear" : "Add todo"}
          </button>
          {/*The previous button adds a todo or clears all of them depending on the value
          of this.state.clearIsClicked. This value is determined by the next button*/}
          <button style= {{flex: "1 0 0"}} onClick= {this.handleControllerBTN}>
            {this.state.clearIsClicked ? "Cancel" : "Clear"}
          </button>
        </div>
        <ul style= {{padding: "0 0 0 0"}}>
          {todosList}
        </ul>
      </div>
    )
  }
  handleAddOrClearBTN = () => {
    if (this.state.clearIsClicked) {
      this.setState({
        todos: [],
        nextId: 1,
        clearIsClicked: false
      });
    }
    else {
      const newToDo = document.getElementById("newTodoDescription").value;
      if (newToDo) {
        document.getElementById("newTodoDescription").value = "";
        this.setState({
          todos: this.state.todos.concat(
            {
              description: newToDo,
              done: false,
              toDoId: this.state.nextId,
              action: "Edit"
            }),
          nextId: this.state.nextId + 1
        });
      }
    }
  }
  handleControllerBTN = () => {
    if (this.state.todos.length > 0) {
      this.setState({
        clearIsClicked: !this.state.clearIsClicked
      });
    }
  }
  findTodoIndex = (prefix, id) => {
    return this.state.todos.findIndex(todoItem =>
      prefix + todoItem.toDoId === id );
  }
  handleUpdateInputText = (event) => {
    const itemIndex = this.findTodoIndex("text", event.target.id);
    this.setState({
      todos: this.state.todos.slice(0,itemIndex).concat(
        {
          description: this.state.todos[itemIndex].description,
          done: this.state.todos[itemIndex].done,
          toDoId: this.state.todos[itemIndex].toDoId,
          action: this.state.todos[itemIndex].action,
          descriptioncontainer: event.target.value
        },
        this.state.todos.slice(itemIndex + 1)
      ),
    });
  }
  handleDoneTodo = (event) => {
    const itemIndex = this.findTodoIndex("check", event.target.id);
    this.setState({
      todos: this.state.todos.slice(0,itemIndex).concat(
        {
          description: this.state.todos[itemIndex].description,
          done: event.target.checked,
          toDoId: this.state.todos[itemIndex].toDoId,
          action: this.state.todos[itemIndex].action
        },
        this.state.todos.slice(itemIndex + 1)
      ),
    });
  }
  handlePrimaryBTN = (event) => {
    const itemIndex = this.findTodoIndex("primaryBTN", event.target.id);
    const selectedAction = this.state.todos[itemIndex].action;
    if (selectedAction !== "Save" ||
      document.getElementById(event.target.id.replace("primaryBTN", "text")).value) {
        if (selectedAction === "Delete") {
          this.setState({
            todos: this.state.todos.slice(0,itemIndex)
              .concat(this.state.todos.slice(itemIndex + 1)),
            nextId: this.state.todos.length === 1 ? 1 : this.state.nextId
          });
        }
        else {
          this.setState({
            todos: this.state.todos.slice(0,itemIndex).concat({
              description: selectedAction === "Edit" ? this.state.todos[itemIndex].description :
                document.getElementById(event.target.id.replace("primaryBTN", "text")).value,
              done: this.state.todos[itemIndex].done,
              toDoId: this.state.todos[itemIndex].toDoId,
              action: selectedAction === "Edit" ? "Save" : "Edit",
              descriptionContainer: this.state.todos[itemIndex].description
            }, this.state.todos.slice(itemIndex + 1)),
          });
        }
    }
  }
  handleSecondaryBTN = (event) => {
    const itemIndex = this.findTodoIndex("secondaryBTN", event.target.id);
    this.setState({
      todos: this.state.todos.slice(0,itemIndex).concat(
        {
          description: this.state.todos[itemIndex].description,
          done: this.state.todos[itemIndex].done,
          toDoId: this.state.todos[itemIndex].toDoId,
          action: this.state.todos[itemIndex].action === "Edit" ? "Delete" : "Edit"
        },
        this.state.todos.slice(itemIndex + 1)
      ),
    });
  }
}