import React, { memo } from "react";

import { useValues, useTodos } from "./state";

import Page from "./components/Page";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = memo(props => {
  console.log(useValues())
  const { inputValue, changeInput, clearInput, keyInput } = useValues();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Page>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Page>
  );
});

export default App