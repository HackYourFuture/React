import React, { Component } from 'react';
import Task from './Task' 


const tasks = [
     {
          id: "1",
          text: "Wake up",
          deadline: "unlimited"
  },
     {
          id: "2",
          text: "React HomeWorks",
          deadline: "Today"
  },
     {
          id: "3",
          text: "Breakfast",
          deadline: "Today before 12:00"
  }
];




export default class App extends Component {
	
  render() {
    return (
      <div>
        <h1>Let's do this:</h1>
		<ul className='tasks'>
			{tasks.map(task => <Task key={task.id} task={task}/>
    )}
		</ul>
      </div>
    );
  }
}