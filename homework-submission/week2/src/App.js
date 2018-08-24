import React, { Component } from 'react';
import './App.css';
import ListHeader from './components/ListHeader.jsx';
import List from './components/List.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoItems from './sources/todoItems.json';

class App extends Component {

  state = { items : TodoItems};

  handleChecked = () => {
    const { done } = this.state.items;
    done === true? this.setState({ done: false }) : this.setState({ done: true });
  }
  
  render() {
    console.log(this.state.items);
    return <React.Fragment>
        <header className="App-header">
          <img src="https://russellinvestments.com/-/media/images/au/tiles/todolist.png" className="App-logo" alt="logo" />
          <ListHeader className="todo-list" Title="Todo List" />>
        </header>
        <ul>{this.state.items.map(item => (
          <div>
          <input type="checkbox" className={(item.done === true ? "checked" : "unchecked")} defaultChecked={item.done} onInput={this.handleChecked}/>
            <li key={item.id}>{item.description + " deadLine: " + item.deadline}</li>
          </div>
          ))} 
        </ul>
      </React.Fragment>;
  }
}

export default App;
