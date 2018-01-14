import React from 'react';
import TodoItem from './TodoItem';
import todoItems from './todo.json';

export default class TodoList extends React.Component {

  state = {
    text: '',
    todos: todoItems
  }; 

  onAddClick = (event) => {
    event.preventDefault();
    var text = this.state.text;
    const ids = this.state.todos.map(todos => todos.id);
  
    const addTodo = {
      "id": ids.length === 0 ? 1 : Math.max(...ids) + 1,
      "description": text,
      "deadline": "2018-01-11",
      "done": false
    }

    var updatedTodos = [addTodo, ...this.state.todos]
    console.log("here is :  ", updatedTodos);

    this.setState({
      text: '',
      todos: updatedTodos
    });
  };

  onAddChange = event => {
    var text = event.target.value;
    this.setState({
      text: text
    });
  };

    
  onDelete = (todoID) => {
    var updatedTodos = this.state.todos.filter((val,index) =>{
    return val.id !== todoID;
    })
    this.setState({
      todos: updatedTodos
    })  
  } 
  
  onDone = (todoID) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoID) {
          todo.done = !todo.done
        }
        return todo
      })
    })
  }

  handleAdd = () =>{
    this.setState({
      todos: this.props.todos
    }) 
    console.log('from function ' , this)

  }

  render() {
    const { todos } = this.state
    console.log(this)
    if(todos.length === 0){
      return(
        <div className="TodoList">No items...</div>
      )
    }
    else {
      return (
        <div className="TodoList">
        <div>
          <div>
            <textarea
            className='TextField'
            value={this.state.commentText}
            onChange={this.onAddChange}
            />
          </div>
          <div>
            <button className="add-button" onClick={this.onAddClick}> Add</button>
          </div>  
        </div>
          <ul>
            {todos.map((todoItem, i) => (
              <React.Fragment key={todoItem.id}>
                <TodoItem handleAdd={ this.handleAdd }  onDelete={this.onDelete} onDone={this.onDone} todoItem = {todoItem} />
              </React.Fragment>
            ))}
          </ul>
        </div>
      )
    } 
  } 
} 