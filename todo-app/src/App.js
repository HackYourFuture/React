import React, { Component } from 'react';
import Task from './Task';

const todo_arr = [
  {
	 id:1,
	 text:"Get out of bed" ,
	 date:"Wed Sep 13 2017"
  },
  {
	  id:2,
	  text:"Brush teeth",
	  date:"Thu Sep 14 2017"
  },
  {
	  id:3,
	  text:"Eat breakfast",
	  date:"Fri Sep 15 2017"
  }
];

class App extends Component {
	
  render() {
    return (
      <div>
        <h1>Todo list</h1>
		<ul className='task-list'>
			{todo_arr.map(item => <Task key={item.id} task={item} />)}
		</ul>
      </div>
    );
  }
}

export default App;
