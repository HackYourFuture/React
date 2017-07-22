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
      deletAllIsClicked: false /* This changes the function of the Add todo button
      from Add to Delete All*/
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
              style= {{flex: "5 0 0"}}/> :
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
          {this.state.deletAllIsClicked ?
            <span style= {{flex: "6 0 0"}}>
              Are you sure that you want to permanently delete all the todos?
            </span> :
            <input
              id= "newTodoDescription"
              type= "text"
              placeholder= "Please write here the description for the new todo that you want to add"
              style= {{flex: "6 0 0"}}/>
          }
          <button style= {{flex: "1 0 0"}} onClick= {this.handleAddOrRemoveAllBTN}>
            {this.state.deletAllIsClicked ? "Delete all" : "Add todo"}
          </button>
          {/*The phe previous button adds a todo or deletes all of them depending on the value
          of this.state.deletAllIsClicked. This value is determined by the next button*/}
          <button style= {{flex: "1 0 0"}} onClick= {this.handleControllerBTN}>
            {this.state.deletAllIsClicked ? "Cancel" : "Delete all"}
          </button>
        </div>
        <ul style= {{padding: "0 0 0 0"}}>
          {todosList}
        </ul>
      </div>
    )
  }
  handleAddOrRemoveAllBTN = () => {
    if (this.state.deletAllIsClicked) {
      this.setState({
        todos: [],
        nextId: 1,
        deletAllIsClicked: false
      });
    }
    else {
      const newToDo = document.getElementById("newTodoDescription").value;
      document.getElementById("newTodoDescription").value = "";
      if (newToDo) {
        this.setState({
          todos: this.state.todos.concat(
            {
              description: newToDo,
              done: false,
              toDoId: this.state.nextId,
              action: "Edit"
            }),
          nextId: this.state.nextId + 1,
        });
      }
    }
  }
  handleControllerBTN = () => {
    this.setState({
      deletAllIsClicked: !this.state.deletAllIsClicked
    });
  }
  findTodoIndex = (prefix, id) => {
    return this.state.todos.findIndex(todoItem =>
      prefix + todoItem.toDoId === id );
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
          });
        }
        else {
          this.setState({
            todos: this.state.todos.slice(0,itemIndex).concat({
              description: selectedAction === "Edit" ? this.state.todos[itemIndex].description :
                document.getElementById(event.target.id.replace("primaryBTN", "text")).value,
              done: this.state.todos[itemIndex].done,
              toDoId: this.state.todos[itemIndex].toDoId,
              action: selectedAction === "Edit" ? "Save" : "Edit"
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