import React from 'react';
import './style2.css';

function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

const ListItem = ({
  description,
  deadline,
  className,
  handleClickDelete,
  handleClickDone,
  done,
}) => {
  return (
    <li className={className}>
      {description}, {deadline}
      <button onClick={handleClickDelete}>Delete</button>
      <button onClick={handleClickDone}>{done ? 'Undone' : 'Done'}</button>
    </li>
  );
};
// The goal of this component is to create a single item of a list .

const DynamicList = ({ data, handleClickDelete, handleClickDone }) => {
  return (
    <ul>
      {data.map(({ id, description, deadline, done }) => (
        <ListItem
          handleClickDelete={() => handleClickDelete(id)}
          handleClickDone={() => handleClickDone(id)}
          key={id}
          done={done}
          description={description}
          deadline={deadline}
          className={done ? 'tick' : 'cross'}
        />
      ))}
    </ul>
  );
};

// This DynamicList function creates a dynamic  ul list component which accepts a object parameter and loops it with map.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      warning: false,
      draft: {
        id: '',
        description: '',
        deadline: '',
        done: false,
      },
      todos: [
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

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({
      draft: {
        ...this.state.draft,
        [event.target.name]: inputValue,
      },
    });
  };

  handleAddClick = event => {
    const { draft, todos } = this.state;
    event.preventDefault();
    const newItem = {
      id: guidGenerator(),
      description: draft.description,
      deadline: draft.deadline,
      done: false,
    };

    const ifExists = todos.filter(
      elem => elem.description.toUpperCase() === newItem.description.toUpperCase(),
    );
    if (ifExists.length || newItem.description === '') {
      this.setState({ warning: true });
    } else {
      this.setState({
        todos: [...todos, newItem],
        warning: false,
      });
    }
  };

  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(elem => id !== elem.id);
    this.setState({
      todos: newTodos,
    });
  };

  handleClickDone = id => {
    const newTodos = this.state.todos.map(elem => {
      if (elem.id === id) {
        elem.done ? (elem.done = false) : (elem.done = true);
      }
      return elem;
    });
    this.setState({ todos: newTodos });
  };

  SetInput = () => {
    const { draft } = this.state;

    return (
      <div>
        <form>
          <label className="fax">Todo Name</label>
          <input
            autoComplete="off"
            type="text"
            name="description"
            value={draft.description}
            onChange={this.handleChange}
          />
          <br />
          <label>Deadline</label>

          <input
            placeholder="Todo Deadline"
            type="date"
            name="deadline"
            value={draft.deadline || ''}
            onChange={this.handleChange}
          />
          <button onClick={this.handleAddClick}> Add</button>
          {this.state.warning ? (
            <span>Please enter a valid and nonrecurrent todo item !</span>
          ) : null}
        </form>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <this.SetInput />
        <h2>Current Todo List</h2>
        <DynamicList
          data={this.state.todos}
          handleClickDelete={this.handleClickDelete}
          handleClickDone={this.handleClickDone}
        />
      </div>
    );
  }
}

// App is a class component which renders the other components in React.

export default App;
