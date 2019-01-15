import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Data from './Data';
import Header from './Header';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: Data
    }
    this.changeHandel = this.changeHandel.bind(this)
  }

  changeHandel(id) {
    this.setState(prevState => {
      const updatedData = prevState.todoData.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo
      })
      return {
        todoData: updatedData
      }
    })
  }

  render() {
    const text = this.state.todoData.length === 0 ? "No item..." : null
    const newData = this.state.todoData.map((item, key) => <Post key={key} item={item} changeHandel={this.changeHandel} />)
    return (
      <div className="App" >
        <Header/>
        {text}
        {newData}
      </div>
    );
  }
}

export default App;
