import React from "react";
const uuid = require("uuid/v4");

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{
          id: 0,
          text: "this is a todo example",
          completed: false
        },
        {
          id: 1,
          text: "this is a another todo",
          completed: true
        },
        {
          id: 2,
          text: "You can add your own todos",
          completed: false
        },
        {
          id: 3,
          text: "Just click on add a task and enter some text",
          completed: true
        },
        {
          id: 4,
          text: "Then Click on + and voila!!",
          completed: false
        }
      ],
      newTodo: ""
    };
    this.renderTodos = this.renderTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.changeTodoStatus = this.changeTodoStatus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addTodo() {
    this.setState({
        todoList: [
          ...this.state.todoList,
          {
            id: uuid(),
            text: this.state.newTodo,
            completed: true
          }
        ]
      },
      () => this.setState({
        newTodo: ""
      })
    );
  }

  changeTodoStatus(id) {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            id,
            text: todo.text,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
    return false;
  }

  deleteTodo(id) {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });
    return false;
  }

  getTodo(type) {
    const totalTodo = this.state.todoList.length;
    const completedTodo = this.state.todoList.filter(todo => todo.completed)
      .length;
    if (type === "completed") {
      return completedTodo;
    } else if (type === "incomplete") {
      return totalTodo - completedTodo;
    }
    return totalTodo;
  }

  handleInputChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  renderTodoText(todo, status) {
    if (status) {
      return <p > {
        todo
      } </p>;
    }
    return ( <p>
      <strike > {
        todo
      } </strike> </p>
    );
  }

  renderTodos() {
    if (!this.state.todoList.length) {
      return
      <h4> Please Add a Todo </h4>;
    }

    return this.state.todoList.map(todo => {
      return ( <div className = "todo" >
        <input checked = {!todo.completed}
        onChange = {() => this.changeTodoStatus(todo.id)}
                type="checkbox" /> {this.renderTodoText(todo.text, todo.completed)}
              <i onClick={() => this.deleteTodo(todo.id)
        }
        className = "fa fa-times" / >
        </div>
      );
    });
  }

  render() {
    return ( <div>
      <div className = "search" >
      <div className = "input-group" >
      <input type = "text"
      className = "form-control"
      placeholder = "Add a task..."
      onChange = {
        this.handleInputChange
      }
      value = {
        this.state.newTodo
      }/> <span className = "input-group-btn" >
      <button className = "btn btn-add"
      type = "button"
      onClick = {
        this.state.newTodo ? this.addTodo : false
      } >
      <i className = "fa fa-plus"aria-hidden = "true" />
                    </button>
                  </span> </div>
              </div> <div className = "todolist" > {
        this.renderTodos()
      } </div> <footer id = "footer" >
      <p>
      You have {
        this.getTodo()
      }
      todo 's, {this.getTodo("completed")} done
      and {
        this.getTodo("incomplete")
      }
      to be done. </p> </footer> </div>
    );
  }
}

export default Todo;
