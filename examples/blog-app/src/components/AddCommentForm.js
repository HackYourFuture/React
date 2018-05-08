import React from 'react';

const defaultState = {
  commentText: '',
  authorName: '',
  image: '',
};

export default class AddCommentForm extends React.Component {

  state = defaultState;

  handleFieldChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  createComment = () => {
    this.props.handleCreateComment(this.state);
    this.setState(defaultState);
  };

  render() {

    return (
      <div className='add-comment-form'>
        <input
          type='text'
          placeholder='Your name'
          value={this.state.authorName}
          onChange={(e) => this.handleFieldChange(e, 'authorName')}
        />
        <input
          type='text'
          placeholder='Your photo'
          value={this.state.image}
          onChange={(e) => this.handleFieldChange(e, 'image')}
        />
        <textarea
          placeholder='Add a new comment'  
          onChange={(e) => this.handleFieldChange(e, 'commentText')}
          value={this.state.commentText}
        />
        <button onClick={this.createComment}>Add comment</button>
      </div>
    );
  }
}
