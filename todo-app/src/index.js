import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';
import './index.css';

let taskList = [
    {description: "Get out of bed" , deadline: "Wed Sep 13 2017"},
    {description: "Brush teeth" , deadline: "Thu Sep 14 2017"},
    {description: "Eat breakfast" , deadline: "Fri Sep 15 2017"},
    ];

ReactDOM.render(<Todo tasks={taskList} />, document.getElementById('root'));
