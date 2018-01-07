import React from 'react'
import TextField from './TextField'
import Button from './Button'

// 1. Add button
// 2. Show text or TextField based on prop

export default class CommentBody extends React.Component {

  state = {
    commentText: ''
  };

  componentWillReceiveProps(newProps) {
    if (newProps.isEditing && !this.props.isEditing) {
      this.setState({commentText: newProps.text});
    }
  }

  handleTextChange = event => {
    this.setState({commentText: event.target.value});
  };

  handleSaveClick = () => {
    this.props.onSaveClick(this.state.commentText);
    this.setState({commentText: ''});
  };

  render() {
    return (
      <div className="CommentBody">
        {!this.props.isEditing && this.renderViewing()}
        {this.props.isEditing && this.renderEditing()}
      </div>
    )
  }

  renderViewing() {
    return (
      <div className='CommentBody-viewing'>
        <div className='CommentBody-text'>
          {this.props.text}
        </div>
        <div className='CommentBody-buttons'>
          <Button label='Edit' onClick={this.props.onEditClick}/>
        </div>
      </div>
    )
  }

  renderEditing() {
    return (
      <div className='CommentBody-editing'>
        <div className='CommentBody-textfield'>
          <TextField
            multiline
            value={this.state.commentText}
            onChange={this.handleTextChange}
          />
        </div>
        <div className='CommentBody-buttons'>
          <Button
            label='Save'
            onClick={this.handleSaveClick}
            disabled={this.state.commentText.trim() === ''}
          />
          <Button
            label='Cancel'
            onClick={this.props.onCancelEditClick}
          />
        </div>
      </div>
    );
  }

}