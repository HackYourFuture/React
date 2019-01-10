import React from 'react';
import Description from './Description';

const todos = [
  {
    todo: 'Get out of bed',
    deadline: new Date(2017, 8, 13, 0, 0, 0, 0)//'Wed Sep 13 2017'
  },
  {
    todo: 'Brush teeth',
    deadline: new Date(2017, 8, 14)//'Thu Sep 14 2017'
  },
  {
    todo: 'Eat breakfast',
    deadline: new Date(2017, 8, 15)//'Fri Sep 15 2017'
  }
]

export default class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <h2>ToDo List</h2>
        <ul>
          {todos.map((eleTodo, index) => (<Description
            todo={eleTodo.todo}
            key={index}
            deadline={eleTodo.deadline}>
          </Description>))}
        </ul>
      </div>
    );
  }
}