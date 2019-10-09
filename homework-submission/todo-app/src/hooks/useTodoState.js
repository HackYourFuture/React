import { useState } from 'react';

export default userTodos => {
  const [todos, setTodos] = useState(userTodos);

  const addTodo = todo => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const toggleComplete = id => {
    const toogledTodo = todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    setTodos(toogledTodo);
  };

  const removeTodo = id => {
    const keepTodos = todos.filter(todo => todo.id !== id);
    setTodos(keepTodos);
  };

  const updateTodo = (id, description, deadline) => {
    const updatedTodo = todos.map(todo =>
      todo.id === id ? { ...todo, description, deadline } : todo,
    );
    setTodos(updatedTodo);
  };

  return { todos, addTodo, toggleComplete, removeTodo, updateTodo };
};
