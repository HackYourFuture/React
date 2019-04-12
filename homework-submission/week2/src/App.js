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

  toggleDone = (event, index) => {
    const listItem = event.target.parentElement;
    const todos = [...this.state.todos];
    const selectedTodo = todos.find(
      todo => `${todo.description}, ${todo.deadline}` === listItem.innerText
    );
    const toggle = () => (selectedTodo.done = !selectedTodo.done);
    toggle();
    todos.splice(index, 1, selectedTodo);
    this.setState({ todos });

    if (selectedTodo.done) {
      listItem.style.textDecoration = 'line-through';
      event.target.style.background = '#43853d';
      event.target.style.fill = 'white';
    } else {
      listItem.style.textDecoration = 'none';
      event.target.style.background = 'transparent';
      event.target.style.fill = '#43853d';
    }
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
              <div key={index} id={index} className={`${todo.done}`}>
                <ul>
                  <ListItem
                    description={todo.description}
                    deadline={todo.deadline}
                    toggleDone={event => this.toggleDone(event, index)}
                    removeTodo={event => this.removeTodo(index)}
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
