import React, { Component } from 'react';
import Header from './Components/Header'
import footer from './Components/footer'
import Container from './Components/Container'
import Input from './Components/Input'
import './App.css';

const data = require('./todoList.json');

class App extends Component {
  state = {
    todoItems: []
  }
  componentDidMount(){
  this.setState({
    todoItems: data
  })
  }
  render() {
    
    return (
      
      <div className="App">
        <Header/>
        <Container todoItems={this.state.todoItems} />  
        <Input/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
