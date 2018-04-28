import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoList from './components/todoList';
import todoList from './components/todoList.json';

class App extends Component {
  state={
    listTodo:[],
  }
  addFunction(id,description,deadline,done) {
    const currentState = this.state.listTodo;
    const newState={id:id,description:description,deadline:deadline,done:done}
    const updatedState=[...currentState,newState];
    this.setState({listTodo:updatedState});
  }
  handleDoneClick = (id) => {
    const newTodoList= this.state.listTodo.map((todoElement) => {
        if(todoElement.id === id){
            return {
                ...todoElement,
                done:!todoElement.done,
            }
        }
        return todoElement;
    });
    this.setState({listTodo : newTodoList});
}
  render() {
    return (
      <div className="App">
        <Header/>
        <TodoList 
        listTodo={this.state.listTodo}
        addFunction={this.addFunction.bind(this)}
        handleDoneClick = {this.handleDoneClick}/>
      </div>
    );
  }
  componentDidMount(){
    this.setState({
        listTodo:todoList,
    })
}
}

export default App;
