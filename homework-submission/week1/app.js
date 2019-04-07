import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/// showing the title as a h1 element
class Header extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
// listing the items as li . Each list contains two props : description and deadline
class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.title}, {this.props.deadline}
          </li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Get out of bed',
          deadline: 'Wed Sep 13 2017',
          completed: true,
        },
        {
          id: 2,
          title: 'Brush teeth',
          deadline: 'Thu Sep 14 2017',
          completed: false,
        },
        {
          id: 3,
          title: 'Eat breakfast',
          deadline: 'Fri Sep 15 2017',
          completed: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header title="Static List" />
        <List title="Get out of bed" deadline="Wed Sep 13 2017" />
        <List title="Brush teeth" deadline="Thu Sep 14 2017" />
        <List title="Eat breakfast" deadline="Fri Sep 15 2017" />

        <Header title="Dynamic List" />
        {this.state.todos.map(todo => {
          return (
            <div key={todo.id}>
              <List title={todo.title} deadline={todo.deadline} />
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
