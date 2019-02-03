import React from 'react';
import Update from './Update';
import Like from './Like';

class Comments extends React.Component {
  state = {
    update: false,
  };
  handleEdit = () => {
    this.setState({ update: true });
  };
  handleCancel = () => {
    this.setState({ update: false });
  };
  handleUpdate = (updatedItem, i) => {
    this.props.handleUpdate(updatedItem, i);
    this.setState({ update: false });
  };

  render() {
    return this.state.update ? (
      <Update
        key={this.props.item._id}
        index={this.props.index}
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
        <p>Comment: {this.props.item.text}</p>
        <p className="date"> {this.props.item.date}</p>
        <input
          type="button"
          value="delete"
          onClick={() => this.props.handleDelete(this.props.item._id, this.props.index)}
        />
        <input type="button" value="edit" onClick={this.handleEdit} />
        <Like item={this.props.item} />
      </div>
    );
  }
}

export default Comments;
