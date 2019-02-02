import React from 'react';
import Update from './Update';

class Comments extends React.Component {
  state = {
    update: false,
    number: 0,
  };
  handleEdit = () => {
    this.setState({ update: true });
  };
  handleCancel = () => {
    this.setState({ update: false });
  };
  handleUpdate = (updatedItem, id) => {
    this.props.handleUpdate(updatedItem, id);
    this.setState({ update: false });
  };
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
    this.props.item.isLiked = true;
  };
  render() {
    return this.state.update ? (
      <Update
        key={this.props.item._id}
        item={this.props.item}
        handleCancel={this.handleCancel}
        handleUpdate={this.handleUpdate}
      />
    ) : (
      <div className="comment">
        <img
          className="avatar"
          src={'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg'}
          alt="avatar"
        />
        <p>
          Author: {this.props.item.author.firstName} {this.props.item.author.lastName}
        </p>
        <p>comment: {this.props.item.text}</p>
        <p className="date"> {this.props.item.date}</p>
        <input
          type="button"
          value="delete"
          onClick={() => this.props.handleDelete(this.props.item._id)}
        />
        <input type="button" value="edit" onClick={this.handleEdit} />
        <input
          type="button"
          value={`like ${this.state.number}`}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default Comments;
