import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todo from './todo.json';
import { SingleTask } from './components/SingleTask';


class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          description: "Study Math",
          done: false,
          id:1
        },
        {
          description: "Finish your homework",
          done: true,
          id:2
        },
        {
          description: "Eat your sandwich",
          done: true,
          id:3
        },
        {
          description: "Listen to music",
          done: true,
          id:4
        }
      ]
    }
    //this.handleClick = this.handleClick.bind(this)
  }
  //add a form and the text will be the description of the task
  //figure out how to delete items, maybe a button and a function that removes it from the list(must be easy)
  handleClick(index) {
    console.log(index)
    //this.setState(prevState => ({
      //isToggleOn: !prevState.isToggleOn
    };

     
  
  render() {
    return (
      <div>
       <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to Your Todo App </h2>
        </div>
        
        <ol className='todos-list'>
          
            {this.state.todos.map((task,i) => {
              return <SingleTask 
              index={i} 
              removeFunction={() => {this.handleClick()}} 
              taskToBuild={task} />
            }
            )
          }
          </ol>
        </div>
          
        
      
      
    )
  }
}

export default App;
