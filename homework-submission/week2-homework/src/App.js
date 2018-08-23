import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import List from "./components/List";
import Checkbox from "./components/Checkbox";
import todos from "./source/todos.json";
import Header from "./components/Header";
import image from "./todo.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    let todos = this.state.todos.slice();
    let foundTodo = todos.find(todo => id === todo.id);
    foundTodo.done = !foundTodo.done;
    this.setState({ todos: todos });
  }

  render() {
    let todoItems = this.state.todos.map((todo, index) => (
      <TodoItem key={index} {...todo} index={index}>
        <Checkbox
          key={index}
          {...todo}
          onClick={() => {
            this.handleClick(index);
          }}
        />
      </TodoItem>
    ));

    let contentTodisplay =
      this.state.todos.length === 0 ? (
        <p>No todos yet </p>
      ) : (
        <List>{todoItems} </List>
      );

    return (
      <div className="App">
        <Header />
        <img src={image} alt="background" />
        {contentTodisplay}
      </div>
    );
  }
}
export default App;
