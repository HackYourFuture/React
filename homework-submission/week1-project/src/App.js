import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Components/todoComponents.js'


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {list: props.JSONList};
  }

  changeState = (id) => {
    const JSONList = this.state.list;
    JSONList[id].done = !JSONList[id].done;
    this.setState({list: JSONList});
  }
  
  render() {
    const JSONList = this.state.list;
  
    return (
      <div>
        <h1>Todo List</h1>
        {JSONList.length == 0 ? <h2>No items...</h2> : JSONList.map((e, index) => <Description 
        descrip = {e.description} 
        deadline = {e.deadline} 
        key = {e.id} 
        done = {e.done} 
        id = {index} 
        changeState = {this.changeState}/>)}
      </div>
    );
  }
}

export default App;
