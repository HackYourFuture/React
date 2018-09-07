import React from "react";
class AddTodoForm extends React.Component {
  onAddTodo = e => {
    e.preventDefault();
    let newTodo = this.enteredTodo.value;
    if (newTodo === "") {
      return "";
    }
    this.props.AddTodo(newTodo);
    this.enteredTodo.focus();
    this.enteredTodo.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onAddTodo} className="AddTodoForm">
        <input
          type="text"
          placeholder="Enter todo"
          ref={el => (this.enteredTodo = el)}
          defaultValue=""
        />
        <button> Add </button>
      </form>
    );
  }
}
export default AddTodoForm;
