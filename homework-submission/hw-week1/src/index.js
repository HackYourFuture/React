import React from 'react';
import ReactDOM from 'react-dom';

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

// This component is header aimed for top of each list
const Header = ({ name }) => <h1 className="header">{name}</h1>;

// const Button = ({ text, clickHandler }) => {
//   return <button onClick={clickHandler}>{text}</button>;
// };

const ItemField = ({ formHandler }) => {
  return (
    <form onSubmit={formHandler}>
      <input type="text" name="itemField" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

// This component renders a todo item which contains description and deadline
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.done };
    this.state = { todo: dynamicList };
    this.itemDone = this.itemDone.bind(this);
  }

  itemDone() {
    this.setState({ done: !this.state.done });
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
    const { description, deadline } = this.props;

    return (
      <li
        onClick={this.itemDone}
        className={`list-box ${this.state.done ? 'font-color' : 'bg-color-hover'}`}
      >
        <div>
          <span className={`block ${this.state.done && 'through'}`}>{description}</span>
          <span>{deadline}</span>
        </div>
        <button onClick={() => this.removeItem(this.state.todo[0].done)}>remove</button>
      </li>
    );
  }
}

// This component renders dynamic todo list
const DynamicComponent = ({ items }) => {
  return (
    <div className="class-div">
      <Header name="Dynamic List" />
      <div>
        <ItemField formHandler={() => this.handleSubmit()} />
        <ul>
          {items.map(elem => (
            <Todo
              key={elem.id}
              description={elem.description}
              deadline={elem.deadline}
              done={elem.done}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

class Container extends React.Component {
  render() {
    return (
      <div className="title">
        <DynamicComponent items={dynamicList} header="Dynamic List" />
      </div>
    );
  }
}

const thisIsWhereReactIsInjected = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(<Container />, thisIsWhereReactIsInjected);
