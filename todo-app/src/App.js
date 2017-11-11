
import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo'
import uuid from 'uuid';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {todos:[]}
    }

    getTodos(){
    this.setState({todos: [
      {
        id:uuid.v4(),
        text: 'Brush your teeth',
        status: 'Done'
      },
      {
        id:uuid.v4(),
        text: 'Do grocery shopping',
        status: 'Not Done'
      },
      {
        id:uuid.v4(),
        text: 'Do your homework',
        status: 'Not Done'
      }
    ]});
  }
      
  componentDidMount(){
    this.getTodos();
  }
  
  handleAddTodo(todo){
    console.log(todo)
    let todos = this.state.todos
    todos.push(todo)
    this.setState({todos:todos})
  }

  handleDeleteTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({todos:todos});
  }

  handleUpdateTodo(text, id){
    let UpdatedTodos = this.state.todos.map(todo => {
      if (id === todo.id){
        console.log(text, id)
        return Object.assign({}, todo, {text:text})
      }
      return todo
    })   
    this.setState({
      todos:UpdatedTodos
    }) 
  }

  render() {
    return (
      <div>
        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        <hr />
        <h1>Todo list:</h1>
          <TodoList todos = {this.state.todos} 
          onClick={this.handleDeleteTodo.bind(this)} 
          onUpdate={this.handleUpdateTodo.bind(this)}/>
      </div>
    );
  }
}