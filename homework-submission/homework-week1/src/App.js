import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './description';
import todos from './sources/todos.json';

class App extends Component {
  state = {
    todos
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Dumie's Todo List</h1>
        </header>
        <p className='App-intro'></p> 
        <checkBox/>
        <ul>
          {
            todos.map((todos)=> {
              // return <li>{todos.id} - {todos.description} - {todos.deadline} - {todos.done ? 'Done' : 'Undone'}</li>;
              return <li>
                <input type='checkbox'/>
                {todos.description} , {todos.deadline} , {todos.done ? 'Done' : 'Undone'}
              </li> 
            })
          }
        </ul>
        
        {/* <Description descriptionAndDeadline='Get out of bed , Wed Sep 13 2017' />
        <Description descriptionAndDeadline='Brush teeth , Thu Sep 14 2017' />
        <Description descriptionAndDeadline='Eat breakfast , Fri Sep 15 2017' /> */}
      </div>
    );
  }
}
export default App;
