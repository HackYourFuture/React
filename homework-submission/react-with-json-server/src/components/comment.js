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
    const { comment, i } = this.props;
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.handleUpdate} className="edit-com-form">
          <textarea name="comment" defaultValue={comment.text}></textarea>
          <button type="submit" className="edit-com">Update</button>
          <button type="button" className="del-com" onClick={this.cancelEditingMode} >Cancel</button>
        </form >
      );
    }
    return (
      <div>
        <button onClick={this.cancelEditingMode} className="edit-com">Edit</button>
        <button onClick={() => this.props.onUpdate(i)} className="del-com">Delete</button>
        <p className="comment-txt">{comment.text}</p>
      </div >
    );
  }

  render() {
    const { comment, userName } = this.props;
    return (
      <div className="comments">
        <i className="material-icons">person</i>
        <span className="user-name">{comment.author}</span>
        {comment.author === userName ? this.showEditBtns() : <p className="comment-txt">{comment.text}</p>}
      </div>
    );
  }
}