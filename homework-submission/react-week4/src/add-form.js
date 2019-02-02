import React from 'react';

export default class AddingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
    let newItem = {
      author: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value
      },
      text: e.target.comment.value,
      date: new Date()
    }
    this.props.onCreate(newItem);
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="addingForm">
        <div id="name-inputs">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div id="comment-cont">
          <textarea name="comment" placeholder="Comment" className="textarea" required ></textarea>
          <button type="submit" className="add-btn">Add</button>
        </div>
      </form>
    );
  }
}

