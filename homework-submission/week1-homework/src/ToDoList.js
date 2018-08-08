import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: "Get out of bed, Wed Sep 13 2017" },
        { id: 1, text: "Brush teeth, Thu Sep 14 2017" },
        { id: 2, text: "Eat breakfast, Fri Sep 15 2017" }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </div>
    );
  }
}

export default TodoList;
