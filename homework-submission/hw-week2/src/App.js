import React from 'react';
import './App.css';

const dynamicList = [
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
];

const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const ItemField = ({ formHandler }) => {
  return (
    <form onSubmit={formHandler}>
      <input type="text" name="itemField" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const Todo = ({ itemName, items }) => {
  return (
    <div className="container">
      <h1 className="header">{itemName}</h1>
      <div className="text-area">{items}</div>
    </div>
  );
};

const Item = ({ description, deadline, removeHandler }) => {
  return (
    <div className="items">
      <div className="item">
        <span id="description">{description}</span>
        <span id="deadline">{deadline}</span>
      </div>
      <Button clickHandler={removeHandler} text="remove" />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: dynamicList,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!e.target.itemField.value) {
      alert('Text field is empty, please enter todo');
    } else {
      const id = this.state.todo.length;
      const object = {
        id: id,
        description: '',
        deadline: new Date().toISOString().substr(0, 10),
        done: false,
      };
      object.description = e.target.itemField.value;
      this.state.todo.push(object);
      this.setState(this.state.todo);
      e.target.itemField.value = '';
    }
  };

  removeItem = index => {
    const newTodo = this.state.todo.splice(index, 1);
    this.setState(newTodo);
  };

  render() {
    return (
      <div className="panel">
        <ItemField formHandler={this.handleSubmit} />
        <Todo
          itemName="Todo List"
          items={this.state.todo.map((item, index) => (
            <Item
              description={item.description}
              deadline={item.deadline}
              removeHandler={() => this.removeItem(index)}
            />
          ))}
        />
      </div>
    );
  }
}

export default App;
