import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import List from "./components/List";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import { observer, inject } from "mobx-react";

@inject("TodoStore")
@observer
class App extends React.Component {
  render() {
    const { TodoStore } = this.props;

    let todoItems = TodoStore.todos.map((todo, index) => (
      <TodoItem
        key={index}
        {...todo}
        index={index}
        onRemove={() => {
          TodoStore.deleteTodo(todo.id);
        }}
        onUpdate={TodoStore.updateTodo}
      >
        <Checkbox
          key={index}
          done={todo.done}
          onClick={() => {
            TodoStore.toggleDone(todo.id);
          }}
          index={index}
        />
      </TodoItem>
    ));
    let contentToDisplay =
      TodoStore.todoCount === 0 ? (
        <p id="no-todos">No todos yet... </p>
      ) : (
        <List>{todoItems}</List>
      );
    return (
      <div className="App">
        <Header />
        <AddTodoForm AddTodo={TodoStore.AddTodo} />
        {contentToDisplay}
      </div>
    );
  }
}
export default App;
