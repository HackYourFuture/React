import React from 'react';

export default class Comment extends React.Component {
  state = { isEditing: false }

  cancelEditingMode = () => this.setState({ isEditing: !this.state.isEditing });

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.props.i, e.target.comment.value);
    this.cancelEditingMode()
  }

  showEditBtns() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.handleUpdate} className="edit-com-form">
          <textarea name="comment" defaultValue={this.props.comment.text}></textarea>
          <button type="submit" className="edit-com">Update</button>
          <button type="button" className="del-com" onClick={this.cancelEditingMode} >Cancel</button>
        </form >
      );
    }
    return (
      <div>
        <button onClick={this.cancelEditingMode} className="edit-com">Edit</button>
        <button onClick={() => this.props.onUpdate(this.props.i)} className="del-com">Delete</button>
        <p className="comment-txt">{this.props.comment.text}</p>
      </div >
    );
  }

  render() {
    let isUser = this.props.comment.author === this.props.userName;
    return (
      <div className="comments">
        <i className="material-icons">person</i>
        <span className="user-name">{this.props.comment.author}</span>
        {isUser ? this.showEditBtns() : <p className="comment-txt">{this.props.comment.text}</p>}
      </div>
    );
  }
}