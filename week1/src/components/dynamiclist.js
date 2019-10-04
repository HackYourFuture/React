import React, { Component } from 'react';
import '../index.css';
const Todo = props => {
    const {id,description, deadline, done } = props.todo;
    return (
        <li className={done ? 'done' : ''} key={id}>
      {description} /<b>Deadline :</b> {deadline} 
    </li>
    );
  };
  
  // The goal of this component is to create a container item for dynamic list

 class Dynamiclist extends Component {
  state = {
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

   render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <Todo todo={todo} key={todo.id}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dynamiclist;

// The goal of this component is to create dynamic todo list