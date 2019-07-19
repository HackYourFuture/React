import React, { Component } from 'react';

// creates a todo item as a <li> element with props which consists description, deadline and className
const TodoItem = ({ description, deadline, className }) => {
  return (
    <li className={className}>
      {description}, {deadline}
    </li>
  );
};

// creates a static unordered list by using TodoItem component
const StaticList = () => {
  return (
    <div>
      <h1>Static List</h1>
      <ul className="link">
        <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};

class Week1 extends Component {
  render() {
    return (
      <div>
        <StaticList />
      </div>
    );
  }
}

export default Week1;
