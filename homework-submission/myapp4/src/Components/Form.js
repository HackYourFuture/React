import React from 'react';
import { inject, observer } from "mobx-react";

@inject("TodosStore")
@observer

class Form extends React.Component {

  handleSubmit = event => {
    event.preventDefault();

    const descriptionInput = this.descriptionInput.value;
    const deadlineInput = this.deadlineInput.value;

    this.props.TodosStore.createTodo({
      description: descriptionInput,
      deadline: deadlineInput,
      __v: 0, done: false
    });
    this.descriptionInput.value = "";
    this.deadlineInput.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Description : <input placeholder="Type a description..." type="text" ref={input => (this.descriptionInput = input)} />
        </label>
        <label>
          Deadline <input type="date" ref={input => (this.deadlineInput = input)} />
        </label>
        <input type="submit" value="Add" className="add" />
      </form>
    );
  }
}

export default Form;
