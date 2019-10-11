import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h3>Todo List</h3>
        <span className="stats">Type:Dynamic</span>
      </header>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <div className="todoItem">
        <span className={`todoItem-name ${this.props.done ? ' line-through' : ''}`}>
          {this.props.description}, {this.props.deadline} {this.props.done}
        </span>
      </div>
    );
  }
}

class DynamicList extends Component {
  static defaultProps = {
    items: [
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
  render() {
    return (
      <div className="todoList">
        <Header />
        {/* todo item */}
        {this.props.items.map((item, i) => (
          <TodoItem
            key={i}
            description={item.description}
            deadline={item.deadline}
            done={item.done}
          />
        ))}
      </div>
    );
  }
}

export default DynamicList;
