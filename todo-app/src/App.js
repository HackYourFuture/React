import React from 'react';
import {observer} from 'mobx-react';
import AddComment from './AddComment';
import CommentList from './CommentList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onAddComment = this.onAddComment.bind(this);
    this.onStopEditCommentText = this.onStopEditCommentText.bind(this);
    this.onNewCommentUpdate = this.onNewCommentUpdate.bind(this);
    this.onStartEditCommentText = this.onStartEditCommentText.bind(this);
    this.onCommentUpdate = this.onCommentUpdate.bind(this);
    this.onCommentRemove = this.onCommentRemove.bind(this);
  }

  // Lifecycle
  componentDidMount() {
    this.props.store.refreshComments();
  }

  onStartEditCommentText(commentId) {
    this.props.store.editComment(commentId);
  }

  onStopEditCommentText() {
    this.props.store.stopEditingComment();
  }

  onAddComment(updatedNewComment) {
    this.props.store.addComment(updatedNewComment);
    this.props.store.resetNewComment();
  }

  onCommentRemove(commentId) {
    this.props.store.removeComment(commentId);
  }

  onCommentUpdate(commentId, values) {
    this.props.store.updateComment(commentId, values);
  }

  onNewCommentUpdate(propertyToUpdate, valueOfPropertyToUpdate) {
    this.props.store.updateNewComment(propertyToUpdate, valueOfPropertyToUpdate);
  }

  render() {
    const {store} = this.props;

    return (
      <div>
        <h1>
          Comments {
            store.comments.length !== 0 && `(unread ${store.numberOfReadComments})`
          }
        </h1>

        <AddComment
          newComment={store.newComment}
          onAddComment={this.onAddComment}
          onNewCommentUpdate={this.onNewCommentUpdate}
        />

        <CommentList
          comments={store.comments}
          editingCommentId={store.editingCommentId}
          onStartEditCommentText={this.onStartEditCommentText}
          onStopEditCommentText={this.onStopEditCommentText}
          onCommentRemove={this.onCommentRemove}
          onCommentUpdate={this.onCommentUpdate}
        />
      </div>
    );
  }
}

export default observer(App);
