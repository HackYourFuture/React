import React from 'react';
import Service from './service';

class EditingComment extends React.Component {
  state = {
    comment: this.props.post.comment,
    edit: false,
  };
  handleDeleteComment = () => {
    let i = this.props.index;
    this.props.post.comment.splice(i, 1);
    Service.deleteComment({
      comment: [...this.state.comment],
      id: this.props.post.id,
    }).then(response => this.setState({ comment: [...this.state.comment] }));
  };
  handleEditMode = () => {
    this.setState({ edit: true });
  };
  handleCancelComment = () => {
    this.setState({ edit: false });
  };
  handleSubmitComment = e => {
    e.preventDefault();
    let updatedComment = this.props.post.comment[this.props.index];
    let i = this.props.post.comment.indexOf(updatedComment);
    this.props.post.comment.splice(i, 1);
    Service.updateComment({
      comment: [...this.state.comment, { text: e.target.comment.value, author: this.props.author }],
      id: this.props.post.id,
    }).then(res => {
      let newComment = [...this.state.comment, res.comment];
      this.setState({ comment: newComment });
      this.props.editComment(newComment);
    });
  };

  render() {
    return !this.state.edit ? (
      <div className="edit-delete-comment">
        <input type="button" value="delete" onClick={() => this.handleDeleteComment()} />
        <input type="button" value="edit" onClick={() => this.handleEditMode()} />
      </div>
    ) : (
      <form className="editCommentForm" onSubmit={this.handleSubmitComment}>
        <input type="text" name="comment" />
        <input type="button" value="cancel" onClick={() => this.handleCancelComment()} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
export default EditingComment;
