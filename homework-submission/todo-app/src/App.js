import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todoitems from './components/Todoitems';
import Todolist from "./components/Todolist.json";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {data : Todolist};

  checkHandler = (item)=> {
    item.done = !item.done;
    this.setState({ data : this.state.data})
  }

  addHandler = (e)=>{
    e.preventDefault();
    const newTodo = {
        "id": this.state.data.length + 1 ,
        "description": e.target.description.value,
        "deadline": e.target.deadline.value,
        "done": false
      }
    this.setState({ data : this.state.data.concat(newTodo)})
  }

  removeHandler = (e,item)=>{
    e.preventDefault();
    const newTodoItems = this.state.data.filter((elem)=> elem !== item);
    this.setState({data : newTodoItems })
  }
    
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header className="App-header" title="To Do List" />
        <AddTodo addHandler={this.addHandler}/>
        <Todoitems id="todo-items" checkHandler={this.checkHandler} state={this.state}
         removeHandler={this.removeHandler}/>
      </div>
    );
  }
}

export default App;
