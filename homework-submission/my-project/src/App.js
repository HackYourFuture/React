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

  changeHandel(item) {
    let i = data.indexOf(item);
    data[i].done = !data[i].done;
    this.setState({ data });
  }

  render() {
    const newData = this.state.todoData.map((item, key) => <Post key={key} item={item} changeHandel={this.changeHandel} />)
    return (
      <div className="App" >
        <Header/>
        {this.state.TodoData.length === 0 ? "No items..." : newData}
      </div>
    );
  }
}

export default App;
