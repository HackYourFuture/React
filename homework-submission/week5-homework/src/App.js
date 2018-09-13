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
  componentWillMount() {
    this.props.TodoStore.getTodos();
  }
  render() {
    const { TodoStore } = this.props;
    let todoItems = TodoStore.todos.map((todo, index) => (
      <TodoItem
        key={index}
        {...todo}
        onRemove={() => {
          TodoStore.deleteTodo(todo._id);
        }}
        onUpdate={TodoStore.updateTodo}
      >
        <Checkbox
          key={index}
          done={todo.done}
          onClick={() => {
            TodoStore.toggleDone(todo._id);
          }}
        />
      </TodoItem>
    ));
    let contentToDisplay =
      TodoStore.todoCount === 0 ? (
        TodoStore.state === "Loading" ? (
          <p id="no-todos">Loading... </p>
        ) : (
          <p id="no-todos">No todos yet... </p>
        )
      ) : (
        <List>{todoItems}</List>
      );
    return (
      <div className="App">
        <Header />
        <AddTodoForm addTodo={TodoStore.addTodo} />
        {contentToDisplay}
      </div>
    );
  }
}
export default App;
