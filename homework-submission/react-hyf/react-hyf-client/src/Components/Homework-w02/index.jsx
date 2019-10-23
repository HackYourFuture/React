import React, { useState } from 'react';
import HyfButton from './components/HyfButton/button';
import HyfInput from './components/HyfInput/input';

function Todo({ todo, index }) {
  return <div className={todo.isComplete ? 'todo-complete' : 'todo-incomplete'}>{todo.name}</div>;
}

function Week02() {
  const [toDoItems, setTodoItems] = useState([
    {
      name: 'eat cheese',
      isComplete: false,
    },
    {
      name: 'fight monsters',
      isComplete: false,
    },
    {
      name: 'dont fall over',
      isComplete: false,
    },
  ]);

  const addTodo = name => {
    const newTodoArray = [...toDoItems, { name }];
    setTodoItems(newTodoArray);
  };

  const removeTodo = index => {
    const newTodoArray = [...toDoItems];
    newTodoArray.splice(index, 1);
    setTodoItems(newTodoArray);
  };

  const toggleTodo = index => {
    const newTodoArray = [...toDoItems];

    newTodoArray[index].isComplete = newTodoArray[index].isComplete ? false : true;
    setTodoItems(newTodoArray);
  };

  return (
    <div className="week02">
      <h2>Homework Week02</h2>
      <div className="info-wrapper">
        {toDoItems.map((todo, index) => (
          <React.Fragment>
            <Todo key={index} index={index} todo={todo} />
            <HyfButton
              name={todo.isComplete ? 'Mark Incomplete' : 'Mark Complete'}
              toggle={() => toggleTodo(index)}
            />
            <HyfButton name="Remove Todo" toggle={() => removeTodo(index)} />
          </React.Fragment>
        ))}
        <HyfInput addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Week02;
