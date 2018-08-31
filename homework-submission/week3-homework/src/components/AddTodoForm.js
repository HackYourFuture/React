import React from "react";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onAddTodo(e) {
    e.preventDefault();
    let newTodo = this.refs.enteredTodo.value;
    if (newTodo === "") {
      return "";
    }
    this.props.AddTodo(newTodo);
    this.refs.enteredTodo.focus();
    this.refs.enteredTodo.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onAddTodo} className="AddTodoForm">
        <input type="text" placeholder="Enter todo" ref="enteredTodo" />
        <button> Add </button>
      </form>
    );
  }
}

export default AddTodoForm;
