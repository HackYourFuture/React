import React from 'react';
import './static-todo-list.css';
import logo from './logo.svg';

class Week1 extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false
      }
    ]
  };

  click = index => {
    const { todos } = this.state;

    const newTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Static To-Do List !</h1>
        </header>

        <div>
          <div>
            <ListHeader text="Static To-Do List" />
            <ul>
              <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
              <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
              <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
            </ul>
          </div>
          <div>
            <ListHeader text="Dynamic To-Do List" />
            <ul>
              {todos.map((todo, index) => {
                return (
                  <ListItem
                    key={index}
                    handler={() => this.click(index)}
                    description={todo.description}
                    deadline={todo.deadline}
                    done={todo.done}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// This component creates a to do item as <li> tag.
function ListItem({ description, deadline, done, handler }) {
  return (
    <li onClick={handler} className={'item-done-' + (done ? 'true' : 'false')}>
      {description}, {deadline}
    </li>
  );
}

// This component creates a header as <h1> tag.
const ListHeader = ({ text }) => {
  return <h1 className="header">{text}</h1>;
};

export default Week1;
