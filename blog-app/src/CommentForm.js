import React from 'react'
import {inject, observer} from 'mobx-react';
import TextField from './TextField'
import Button from './Button'

@inject('comments') @observer
export default class CommentForm extends React.Component {

  state = {
    commentText: ''
  };

  handleAddCommentClick = () => {
    this.props.comments.addComment(this.state.commentText);
    this.setState({commentText: ''});
  };

  handleCommentTextChange = event => {
    this.setState({
      commentText: event.target.value
    });
  };

  render() {
    return (
      <form className='CommentForm'>
        <div className='CommentForm-input'>
          <TextField
            multiline
            value={this.state.commentText}
            onChange={this.handleCommentTextChange}
          />
        </div>
        <div className='CommentForm-buttons'>
          <Button
            label="Add comment"
            onClick={this.handleAddCommentClick}
            disabled={this.state.commentText.trim() === ''}
          />
        </div>
      </form>
    )
  }

}