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
    const styles2 = {
      display: this.state.todoData.length === 0 ? 'block' : 'none'
    }
    const newData = this.state.todoData.map((item, key) => <Post key={key} item={item} changeHandel={this.changeHandel} />)
    return (
      <div className="App" >
        <Header styles2={styles2} />
        {newData}
      </div>
    );
  }
}

export default App;
