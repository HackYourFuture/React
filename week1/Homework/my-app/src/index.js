import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import todoarray from './todo.json';

const TodoItem = props => {
  return (
    <li>
      {props.name} {props.deadline}
    </li>
  );
};
// this component displays static todo items by calling TodoItem component .
const StaticList = () => (
  <ul>
    <TodoItem name="Get out of bed, " deadline="Wed Sep 13 2017" />
    <TodoItem name="Brush teeth, " deadline="Thu Sep 14 2017" />
    <TodoItem name="Eat breakfast, " deadline="Fri Sep 15 2017" />
  </ul>
);

// this component displays todo list by fetching local Json file  and renders components dynamically .
//In addition cross out a todo item if done is true
const DynamicList = () => (
  <ul>
    {todoarray.map(DynamicData => (
      <div className={DynamicData.done ? 'completed-todo' : ''}>
        <TodoItem name={DynamicData.description} deadline={DynamicData.deadline} />
      </div>
    ))}
  </ul>
);

class App extends Component {
  render() {
    return (
      <div>
        <h1> TODO LIST </h1>
        <h3> Static list </h3>
        <StaticList />
        <h3> Dynamic list </h3>
        <DynamicList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('todo'));
