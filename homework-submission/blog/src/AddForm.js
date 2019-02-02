import React from 'react';

class AddForm extends React.Component {
  handleClick = event => {
    event.preventDefault();
    let newItem = {
      author: { firstName: event.target.firstName.value, lastName: event.target.lastName.value },
      text: event.target.text.value,
    };
    this.props.addComment(newItem);
    event.target.reset();
  };
  render() {
    return (
      <div className="add-form">
        <form onSubmit={this.handleClick}>
          <label>Comment</label>
          <input type="text" name="text" />
          <label>Author: First Name</label>
          <input type="text" name="firstName" />
          <label>Last Name</label>
          <input type="text" name="lastName" />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddForm;
