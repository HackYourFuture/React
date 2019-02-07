import React from 'react';

export default class Comment extends React.Component {

  state = { editingMode: false }

  cancelEditingMode = () => {
    this.setState({ editingMode: !this.state.editingMode });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.onUpdate({
      index: this.props.i,
      author: this.props.userName,
      updatedComment: e.target.comment.value
    });
    this.cancelEditingMode()
  }

  showEditBtns() {
    if (this.props.comment.author !== this.props.userName) {
      return <p className="comment-txt">{this.props.comment.text}</p>;
    } else if (this.state.editingMode) {
      return (
        <form onSubmit={this.handleUpdate}>
          <input type="text" name="comment" defaultValue={this.props.comment.text} />
          <button type="submit" className="update-com">Update</button>
          <input type="button" value="Cancel" onClick={this.cancelEditingMode} className="cancel-com" />
        </form >
      );
    }
    return (
      <div>
        <button onClick={this.cancelEditingMode} className="edit-com">Edit</button>
        <button onClick={() => this.props.onDelete(this.props.i)} className="del-com">Delete</button>
        <p className="comment-txt">{this.props.comment.text}</p>
      </div >
    );
  }

  render() {
    return (
      <div className="comments">
        <i className="material-icons">person</i>
        <span className="user-name">{this.props.comment.author}</span>
        {this.showEditBtns()}
      </div>


    );
  }
}