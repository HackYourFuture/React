import React, { Component } from 'react';

// creates a todo item as a <li> element with props which consists description, deadline and className
const TodoItem = props => {
  const { description, deadline, className, deleteItem } = props;
  return (
    <li className={className} onClick={deleteItem}>
      {description}, {deadline}
    </li>
  );
};

class Week2 extends Component {
  state = {
    todoList: [
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

    newTodo: {
      id: '',
      description: '',
      deadline: '',
      done: false,
    },
  };

  // Gets info from input element in onChange event
  GetNewTodoItemInfo = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    this.setState({ newTodo: { ...this.state.newTodo, [inputName]: inputValue } });
  };

  AddNewTodo = event => {
    const newTodo = {
      id: Date.now(),
      description: this.state.newTodo.description,
      deadline: this.state.newTodo.deadline,
      done: false,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  DeleteItem = id => {
    const { todoList } = this.state;
    this.setState({ todoList: [...todoList].filter(elem => elem.id !== id) });
  };

  RenderList = () => {
    return (
      <ul className="link">
        {this.state.todoList.map(elem => {
          const { id, description, deadline, done } = elem;
          return (
            <TodoItem
              key={id}
              description={description}
              deadline={deadline}
              className={done ? 'done' : 'notdone'}
              deleteItem={() => this.DeleteItem(id)}
            />
          );
        })}
      </ul>
    );
  };

  RenderForm = () => {
    return (
      <React.Fragment>
        <label>New Todo: </label>
        <input
          type="text"
          name="description"
          value={this.state.newTodo.description}
          onChange={this.GetNewTodoItemInfo}
        />
        <input
          type="date"
          name="deadline"
          value={this.state.newTodo.deadline}
          onChange={this.GetNewTodoItemInfo}
        />
        <button type="submit" onClick={this.AddNewTodo}>
          Add New Todo Item
        </button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <h1>Dynamic List</h1>
        <this.RenderList />
        <this.RenderForm />
      </div>
    );
  }
}

export default Week2;
