import React from 'react';
import './App.css';
//  static
import Task from './component/staticLIstComponent/staticTaskDescription';
import DeadLine from './component/staticLIstComponent/staticListDeadLine';
// dynamic
import DynamicId from './component/dynamicComponent/dynamicID';
import DynamicDescription from './component/dynamicComponent/dynamicDescription';
import DynamicDeadLine from './component/dynamicComponent/dynamicDeadLine';

//static
const staticTodo = (description, deadline) => {
  return (
    <ul>
      {Task(description)}
      {DeadLine(deadline)}
    </ul>
  );
};

//  dynamic

const todos = [
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
];

const dynamicTodo = () => {
  return todos.map((todo, index) => {
    const cross = todo.done ? 'cross' : null;
    return (
      <li key={index} className={cross}>
        <DynamicId id={todo.id} />
        <DynamicDescription description={todo.description} />
        <DynamicDeadLine deadline={todo.deadline} />
      </li>
    );
  });
};

const App = () => {
  return (
    <div>
      <section className="static-list">
        <h1 className="static-title">Todos (static list)</h1>

        {staticTodo('Get out of bed', 'Wed Sep 13 2017')}
        {staticTodo('Brush teeth', 'Thu Sep 14 2017')}
        {staticTodo('Eat breakfast', 'Fri Sep 15 2017')}
      </section>

      <section className="dynamic-list">
        <h1 className="dynamic-title">Todos (dynamic list)</h1>
        <ul>{dynamicTodo()}</ul>
      </section>
    </div>
  );
};

export default App;
