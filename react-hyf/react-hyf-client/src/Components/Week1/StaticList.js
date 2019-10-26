import React, { Component } from 'react';
import AppHeader from '../../AppHeader';

class Header extends Component {
  render() {
    return (
      <header>
        <h3>Todo List</h3>
        <span className="stats">Type:Static</span>
      </header>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <div className="todoItem">
        <span className="todoItem-name">
          {this.props.description}, {this.props.deadline}
        </span>
      </div>
    );
  }
}

class StaticList extends Component {
  render() {
    return (
      <div className="todoList">
        <AppHeader />
        <Header />
        {/* todo list */}
        <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </div>
    );
  }
}

export default StaticList;
