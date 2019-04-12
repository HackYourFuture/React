import React from 'react';
import './App.css';
import NewTodo from './components/newTodoForm';
import ListItem from './components/listItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: false,
        },
        {
          id: 2,
          description: 'Brush teeth',
          deadline: '2017-09-10',
          done: false,
        },
        {
          id: 3,
          description: 'Eat breakfast',
          deadline: '2017-09-09',
          done: false,
        },
      ],
    };
  }

  addTodo = todo => {
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
  };

  toggleDone = index => {
    const { todos } = this.state;
    const newTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  removeTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-list">
          {this.state.todos.map((todo, index) => {
            return (
              <div key={index} id={index}>
                <ul>
                  <ListItem
                    description={todo.description}
                    deadline={todo.deadline}
                    toggleDone={() => this.toggleDone(index)}
                    removeTodo={() => this.removeTodo(index)}
                    done={todo.done}
                  />
                </ul>
              </div>
            );
          })}
        </div>

        <div className="add-todo">
          <NewTodo addTodo={this.addTodo} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
