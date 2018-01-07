import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {

  state = {
    editingCommentID: null
  };

  handleCommentEdit = id => {
    this.setState({editingCommentID: id});
  };

  handleCommentCancelEdit = () => {
    this.setState({editingCommentID: null});
  };

  handleCommentSave = (id, text) => {
    this.props.onSaveComment(id, text);
    this.handleCommentCancelEdit();
  };

  render() {
    return (
      <div className="CommentList">
        {this.renderList()}
      </div>
    )
  }

  renderList() {

    const { comments } = this.props

    return (
      <ul>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            {index > 0 && <li className="CommentList-separator"/>}
            <Comment
              comment={comment}
              onToggleIsLiked={this.props.onToggleIsLiked}
              isEditing={comment.id === this.state.editingCommentID}
              onEdit={this.handleCommentEdit}
              onCancelEdit={this.handleCommentCancelEdit}
              onSave={this.handleCommentSave}
            />
          </React.Fragment>
        ))}
      </ul>
    )
  }

}