import React from 'react';
import {inject, observer} from 'mobx-react';
import Comment from './Comment';

@inject('comments') @observer
export default class CommentList extends React.Component {

  state = {
    editingCommentID: null
  };

  handleCommentStartEdit = id => {
    this.setState({editingCommentID: id});
  };

  handleCommentStopEdit = () => {
    this.setState({editingCommentID: null});
  };

  render() {
    return (
      <div className="CommentList">
        {this.renderList()}
      </div>
    )
  }

  renderList() {
    const {comments} = this.props.comments

    return (
      <ul>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            {index > 0 && <li className="CommentList-separator"/>}
            <Comment 
              id={comment.id}
              isEditing={comment.id === this.state.editingCommentID}
              onStartEdit={this.handleCommentStartEdit}
              onStopEdit={this.handleCommentStopEdit}
            />
          </React.Fragment>
        ))}
      </ul>
    )
  }

}