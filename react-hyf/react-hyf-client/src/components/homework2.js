import React from 'react';
import './homework2.css';

const TodoListItem = ({ id, description, deadline, done, removeTodoItem }) => {
  return (
    <li key={id} className={done ? 'done' : ''} onClick={() => removeTodoItem(id)}>
      {description}, {deadline}
    </li>
  );
};

const DynamicList = ({ listArray, removeTodoItem }) => {
  return (
    <div className="dynamic_list">
      <h1>Dynamic List</h1>
      <ul>
        {listArray.map((listItem, index) => {
          return (
            <TodoListItem
              key={index}
              id={listItem.id}
              removeTodoItem={removeTodoItem}
              description={listItem.description}
              deadline={listItem.deadline}
              done={listItem.done}
            />
          );
        })}
      </ul>
    </div>
  );
};

class Homework2 extends React.Component {
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
      description: 'Todo Item',
      deadline: '',
      done: false,
    },
  };

  addTodoItem(event) {
    event.preventDefault();
    const target = event.target;
    const newTodo = {
      id: this.state.todoList.length + 1,
      description: target.description.value,
      deadline: target.deadline.value,
      done: target.done.checked,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  }

  removeTodoItem(id) {
    const todoList = this.state.todoList;
    const newList = todoList.filter(item => item.id !== id);
    this.setState({ todoList: newList });
  }

  handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    this.setState({ newTodo: { ...this.state.newTodo, [name]: value } });
  }

  render() {
    return (
      <div className="main">
        <form className="form" onSubmit={this.addTodoItem.bind(this)}>
          <input
            className="input"
            type="text"
            name="description"
            value={this.state.newTodo.description}
            onChange={this.handleChange.bind(this)}
          />
          <input
            className="input"
            type="date"
            name="deadline"
            value={this.state.newTodo.deadline}
            onChange={this.handleChange.bind(this)}
          />
          <input
            className="input"
            type="checkbox"
            name="done"
            checked={this.state.newTodo.done}
            onChange={this.handleChange.bind(this)}
          />
          <button className="button" type="submit">
            Add New Todo Item
          </button>
        </form>

        <DynamicList
          listArray={this.state.todoList}
          removeTodoItem={this.removeTodoItem.bind(this)}
        />
      </div>
    );
  }
}

export default Homework2;
