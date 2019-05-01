import React, { Component } from 'react';

class AddingForm extends Component {
  render() {
    const { addTodoItem } = this.props;
    return (
      <form onSubmit={addTodoItem} className="Add">
        <input type="text" name="description" placeholder="Description" className="AddingInput" />
        <input type="date" name="deadline" placeholder="Deadline" className="AddingInput" />
        <input type="submit" name="add" value="Add" className="AddingButton" />
      </form>
    );
  }
}

export default AddingForm;
