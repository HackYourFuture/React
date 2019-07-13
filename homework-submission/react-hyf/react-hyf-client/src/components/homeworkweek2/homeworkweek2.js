import React from 'react';
import './homeworkweek2.css';

const Item = ({ id, description, deadline, done, removeItem }) => {
  return (
    <li className={done === true ? 'true' : ''}>
      {description} {deadline} {done}
      <span className="delete" onClick={() => removeItem(id)}>
        DELETE
      </span>
    </li>
  );
};

const TodoItems = ({ toDoList, removeItem }) => {
  const length = toDoList.length;
  const ListItems = length ? (
    toDoList.map(({ id, done, description, deadline }) => {
      return (
        <Item
          key={id}
          id={id}
          description={description}
          deadline={deadline}
          done={done}
          removeItem={removeItem}
        />
      );
    })
  ) : (
    <p>There is no items</p>
  );

  return <ul className="todo-items">{ListItems}</ul>;
};

class AddItems extends React.Component {
  state = {
    description: '',
    deadline: '',
  };

  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  errorMessage() {
    let element = document.getElementById('error');
    element.classList.remove('displayMessage');
  }

  handelSubmit = e => {
    e.preventDefault();
    if (e.target['description'].value !== '' && e.target['deadline'].value !== '') {
      this.props.addItem(this.state);
      this.setState({
        description: '',
        deadline: '',
      });
    } else {
      this.errorMessage();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label>Description: </label>
          <input
            type="text"
            id="description"
            value={this.state.description}
            placeholder="Enter a short description here..."
            onChange={this.handelChange}
          />

          <label>Deadline: </label>
          <input
            type="date"
            id="deadline"
            placeholder="Enter deadline..."
            value={this.state.deadline}
            onChange={this.handelChange}
          />
          <input type="submit" value="Add" className="add" />
        </form>
      </div>
    );
  }
}

class HomeworkWeek2 extends React.Component {
  state = {
    toDoList: [
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

  removeItem = id => {
    const toDoList = this.state.toDoList.filter(item => {
      return item.id !== id;
    });
    this.setState({ toDoList });
  };

  addItem = item => {
    const random = Math.round(Math.random() * 9999);
    item.id = random;
    let items = this.state.toDoList;
    items.push(item);
    this.setState({ items: [...items] });
  };

  displayMessage = () => {
    let ele = document.getElementById('error');
    ele.classList.add('displayMessage');
  };

  render() {
    return (
      <div className="week2">
        <h2>To Do App</h2>
        <AddItems addItem={this.addItem} />
        <h2>To Do List</h2>

        <TodoItems toDoList={this.state.toDoList} removeItem={this.removeItem} />
        <div className="error displayMessage" id="error">
          <div className="message_box ">
            <p>
              All fields are required please insert all fields{'  '}
              <i className="fa fa-exclamation-triangle" />
            </p>
            <button className="ok-button" onClick={this.displayMessage}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeworkWeek2;
