import React from 'react';

const TodoListItem = ({ id, description, deadline, done, clickHandler }) => {
  return (
    <li key={id} className={done ? 'done' : ''} onClick={clickHandler}>
      {description}, {deadline}
    </li>
  );
};

const DynamicList = ({ listArray, removeTodoItem }) => {
  return (
    <div className="dynamic_list">
      <h2>Dynamic List</h2>
      <ul>
        {listArray.map(listItem => {
          return (
            <TodoListItem
              key={listItem.id}
              onClick={removeTodoItem}
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
      done: target.done.value,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  }

  removeTodoItem(event) {
    const removedItemId = event.target.id;
    this.setState({ todoList: [...this.state.todoList].filter(item => item.id !== removedItemId) });
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
          clickHandler={this.removeTodoItem.bind(this)}
        />
      </div>
    );
  }
}

export default Homework2;
