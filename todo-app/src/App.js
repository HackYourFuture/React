import React, { Component } from 'react';
import Task from './Task' 


const tasks = [
     {
          id: "1",
          description: "Wake up",
          deadline: "Wed Sep 13 2017"
  },
     {
          id: "2",
          description: "React HomeWorks",
          deadline: "Today"
  },
     {
          id: "3",
          description: "Breakfast",
          deadline: "Today before 12:00"
  }
];




export default class App extends Component {
	
  render() {
    return (
      <div>
        <h1>Todo App</h1>
		<ul className='tasks'>
			{tasks.map(task => <Task key={task.id} task={task}/>
    )}
		</ul>
      </div>
    );
  }
}