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

  toggleDone = e => {
    const wrapperDivOfListItem = e.target.parentElement.parentElement.parentElement;
    const listItem = e.target.parentElement;
    if (wrapperDivOfListItem.className === 'false') {
      wrapperDivOfListItem.className = 'true';
      listItem.style.textDecoration = 'line-through';
      e.target.style.background = '#43853d';
      e.target.style.fill = 'white';
    } else {
      wrapperDivOfListItem.className = 'false';
      listItem.style.textDecoration = 'none';
      e.target.style.background = 'transparent';
      e.target.style.fill = '#43853d';
    }
  };

  removeTodo = index => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  newTodo = async (event, index) => {
    event.preventDefault();
    if (document.querySelector('.todo').value === '') {
      alert('Please enter a todo!');
    } else if (document.querySelector('.date').value === '') {
      alert('Please enter a due date!');
    } else {
      const newTodos = [...this.state.todos];
      await newTodos.push({
        id: index,
        description: document.querySelector('.todo').value,
        deadline: document.querySelector('.date').value,
        done: false,
      });
      await this.setState({ todos: newTodos });
    }
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
                    toggleDone={this.toggleDone}
                    remove={event => this.removeTodo(index)}
                  />
                </ul>
              </div>
            );
          })}
        </div>

        <div className="add-todo">
          <NewTodo addTodo={this.newTodo} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
