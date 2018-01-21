import React from 'react';
import {inject, observer} from 'mobx-react';
import Avatar from './Avatar';
import CommentAuthor from './CommentAuthor';
import CommentDate from './CommentDate';
import CommentBody from './CommentBody';
import Button from './Button';

@inject('comments') @observer
export default class Comment extends React.Component {

  handleToggleIsLiked = () => {
    this.props.comments.toggleLiked(this.props.id);
  };

  handleRemoveClick = () => {
    this.props.comments.removeComment(this.props.id);
  };

  handleEdit = () => {
    this.props.onStartEdit(this.props.id);
  };

  handleSave = text => {
    this.props.comments.updateComment(this.props.id, text);
    this.props.onStopEdit();
  };

  handleCancel = () => {
    this.props.onStopEdit();
  };

  render() {
    const {
      id,
      isEditing,
    } = this.props;

    const comment = this.props.comments.findComment(id)
    if (comment == null) { return null; }

    return (
      <li className="Comment">
        <div className="Comment-header">
          <div className="Comment-avatar">
            <Avatar author={comment.author}/>
          </div>
          <div className="Comment-info">
            <CommentAuthor author={comment.author}/>
            <CommentDate date={comment.date} />
            <div>
              {comment.isLiked ?
                <span onClick={() => this.handleToggleIsLiked(comment._id)}>♥</span>
                :
                <span onClick={() => this.handleToggleIsLiked(comment._id)}>♡</span>
              }
            </div>
          </div>

          <Button
            label="Remove"
            onClick={this.handleRemoveClick}
          />
        </div>
        
        <CommentBody
          text={comment.text}
          isEditing={isEditing}
          onEditClick={this.handleEdit}
          onSaveClick={this.handleSave}
          onCancelEditClick={this.handleCancel}
        />
      </li>
    )
  }

}
