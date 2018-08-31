import React from "react";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onAddTodo(e) {
    e.preventDefault();
    let newTodo = this.enteredTodo.value;
    if (newTodo === "") {
      return "";
    }
    this.props.AddTodo(newTodo);
    this.enteredTodo.focus();
    this.enteredTodo.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onAddTodo} className="AddTodoForm">
        <input
          type="text"
          placeholder="Enter todo"
          ref={el => (this.enteredTodo = el)}
        />
        <button> Add </button>
      </form>
    );
  }
}

export default AddTodoForm;
