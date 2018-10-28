import React from 'react';
import Todo from './Todo';
import todos from './todo.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      todos: [],
      newToDoItem: {
      text: ''        
      }
    };

    this.changeToDoList = this.changeToDoList.bind(this);
    this.inputAdd = this.inputAdd.bind(this);
    this.submitNewItem = this.submitNewItem.bind(this);
  }
  componentDidMount() {
      setTimeout(() => {
      this.setState({ todos });
    }, 1000);
  }

  changeToDoList(updatedReadValue, toDoId) {
    const updatedtodos = this.state.todos.map(comment => {
      if (toDoId === comment.id) {
        return Object.assign({}, comment, {read: updatedReadValue});
      }
      return comment;
    });
    this.setState({
      todos: updatedtodos
    });
  }

  rendertodos(todos) {
    // Conditional rendering
    if (todos.length === 0) {
      return <div>Loading...</div>;
    }
    return todos.map(comment => {
      return (
        <Todo
          key={comment.id}
          comment={comment}
          onReadChange={this.changeToDoList}
        />
      );
    })
  }

  getNumberOfReadtodos(todos) {
    return todos.filter(comment => !comment.read).length;
  }

  submitNewItem(event) {
    event.preventDefault();
    const updatednewToDoItem = Object.assign({}, this.state.newToDoItem, {
      date: new Date(),
      id: this.state.todos.length + 1,
      read: false
    });
    const updatedtodos = [...this.state.todos, updatednewToDoItem];
    this.setState({
      todos: updatedtodos,
      newToDoItem: {
      text: ''
      }
    });
  }

  inputAdd(event) {
    const updatednewToDoItem = Object.assign({}, this.state.newToDoItem, {
      [event.target.name]: event.target.value
    });
    this.setState({
      newToDoItem: updatednewToDoItem
    });
  }

  render() {
    return (
      <div>
        <h1>
          ToDo List {
            this.state.todos.length !== 0 && `(unread ${this.getNumberOfReadtodos(this.state.todos)})`
          }
        </h1>
        <div>
          <form onSubmit={this.submitNewItem}>            
            <textarea
              name="text"
              value={this.state.newToDoItem.text}
              onChange={this.inputAdd}
            />           
            <button>submit</button>
          </form>
        </div>

        {this.rendertodos(this.state.todos)}
      </div>
    );
  }
}
