import React, { useState } from 'react';
import { todoList } from './services/todoContents';
import Todo from './components/todo';
import TodoStatic from './components/todoStatic';

function App() {
  const [todoListState, setTodoListState] = useState(todoList);

  const handleDone = id => {
    const todoIndex = todoListState.findIndex(todo => todo.id === id);
    const todo = { ...todoListState[todoIndex] };
    todo.done = !todo.done;
    const todoList = [...todoListState];
    todoList[todoIndex] = todo;
    setTodoListState([...todoList]);
  };

  const removeHandler = id => {
    const todoList = [...todoListState];
    const todoIndex = todoListState.findIndex(todo => todo.id === id);
    todoList.splice(todoIndex, 1);
    setTodoListState([...todoList]);
  };

  return (
    <div className="App">
      <ul>
        {todoListState.map(todo => (
          <Todo key={todo.id} {...todo} handleDone={handleDone} onDelete={removeHandler} />
        ))}
      </ul>
      <TodoStatic />
    </div>
  );
}

export default App;
