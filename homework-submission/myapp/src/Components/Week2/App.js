import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import AddingForm from './Components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: true,
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

  checkStatus = id => {
    const newTodoItems = this.state.items.map(element => {
      if (id === element.id) {
        return {
          ...element,
          done: !element.done,
        };
      }
      return element;
    });
    this.setState({ items: newTodoItems });
  };

  addTodoItem = element => {
    element.preventDefault();
    const newTodo = {
      id: this.state.items.length + 1,
      description: element.target.description.value,
      deadline: element.target.deadline.value,
      done: false,
    };
    this.setState({ items: this.state.items.concat(newTodo) });
  };

  removeTodoItem = id => {
    const newTodoItems = this.state.items.map(element => {
      if (id === element.id) {
        this.state.items.splice(element.id - 1, 1);
      }
      return element;
    });
    this.setState({ items: newTodoItems });
  };

  render() {
    const title = 'Todo List';
    return (
      <div className="root">
        <div className="App">
          <section>
            <h1>{title}</h1>

            <AddingForm addTodoItem={this.addTodoItem} />

            {this.state.items.map((element, index) => {
              return (
                <TodoList
                  key={index}
                  Todo_Id={element.id}
                  Todo_Description={element.description}
                  Todo_Deadline={element.deadline}
                  Todo_Status={element.done}
                  checkStatus={this.checkStatus}
                  removeItem={this.removeTodoItem}
                />
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
