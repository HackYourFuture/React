import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

  class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          todos: [
               {
                description: "Todo List",
                done: false
               }
            ]
        };
        
    }
    
    handleChange = (e) => {
    const description =  this.name.value;
    const newToDo = {description};
    const todosList = [...this.state.todos, newToDo];
    this.setState({todos:todosList})
  }
    
  
    onAdd = () => {

    const description = prompt("Add the description ?")

    const newToDo = {description};
    const todosList = [...this.state.todos, newToDo];
    this.setState({todos:todosList})
    }
  onDelete= (index) => {
    const todosList = [...this.state.todos];
    todosList.splice(index, 1);
    this.setState({todos:todosList});
  }
    render() {
      let todoList=this.state.todos;
      todoList= todoList.map(function(item,index){
        return( <Todo  description={item.description} key={index} index={index} onDelete={this.onDelete}/>);
      }.bind(this))
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>To Do List</h2>
          </div>
          <div className= "App-Body">
          {todoList}
          </div>
           <input ref={input => this.name = input} />
            <button onClick={this.handleChange}>Add</button>
        </div>
      );
    }

  }

  export default App;