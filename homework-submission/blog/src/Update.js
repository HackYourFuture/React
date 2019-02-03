import React from 'react';

class Update extends React.Component {
  onUpdate = event => {
    event.preventDefault();
    let newItem = {
      author: { firstName: event.target.firstName.value, lastName: event.target.lastName.value },
      text: event.target.text.value,
      _id: this.props.item._id,
    };
    this.props.handleUpdate(newItem, this.props.index);
  };

  render() {
    return (
      <div className="update-form">
        <img
          className="avatar"
          src={'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg'}
          alt="avatar"
        />
        <form onSubmit={this.onUpdate}>
          <input
            placeholder="Comment"
            type="text"
            name="text"
            defaultValue={this.props.item.text}
          />
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            defaultValue={this.props.item.author.firstName}
          />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            defaultValue={this.props.item.author.lastName}
          />
          <input type="submit" value="Update" />
          <input type="button" value="Cancel" onClick={this.props.handleCancel} />
        </form>
      </div>
    );
  }
}
export default Update;
