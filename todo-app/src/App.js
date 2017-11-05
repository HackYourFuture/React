import React from 'react';
import Comment from './Comment';
import comments from './comments.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      comments: [],
      newComment: {
        username: '',
        text: '',
        imageType: 'retro'
      },
      editingCommentId: null
    };

    this.handleReadChange = this.handleReadChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCommentTextUpdate = this.onCommentTextUpdate.bind(this);
    this.onStopEditCommentText = this.onStopEditCommentText.bind(this);
  }

  // Lifecycle
  componentDidMount() {
    // Imagine this data was coming from an API
    // fetchComments().then(response => {
    //   this.setState({
    //     comments: response.comments
    //   });
    // });
    setTimeout(() => {
      this.setState({ comments });
    }, 1000);
  }

  updateComment(commentId, values) {
    const updatedComments = this.state.comments.map(comment => {
      if (commentId === comment.id) {
        return Object.assign({}, comment, values);
      }
      return comment;
    });
    this.setState({
      comments: updatedComments
    });
  }

  handleReadChange(updatedReadValue, commentId) {
    this.updateComment(commentId, {read: updatedReadValue});
  }

  onCommentTextUpdate(text, commentId) {
    this.updateComment(commentId, {text});
    this.setState({
      editingCommentId: null
    });
  }

  onStartEditCommentText(commentId) {
    this.setState({
      editingCommentId: commentId
    });
  }

  onStopEditCommentText() {
    this.setState({
      editingCommentId: null
    });
  }

  renderComments(comments) {
    // Conditional rendering
    if (comments.length === 0) {
      return <div>Loading...</div>;
    }

    // List and keys
    return comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          editing={this.state.editingCommentId === comment.id}
          onReadChange={this.handleReadChange}
          onCommentTextUpdate={(text) => this.onCommentTextUpdate(text, comment.id)}
          onStartEditText={this.onStartEditCommentText.bind(this, comment.id)}
          // () => this.onStartEditCommentText(comment.id)
          onStopEditText={this.onStopEditCommentText}
        />
      );
    })
  }

  getNumberOfReadComments(comments) {
    return comments.filter(comment => !comment.read).length;
  }

  onFormSubmit(event) {
    event.preventDefault();
    const updatedNewComment = Object.assign({}, this.state.newComment, {
      date: new Date(),
      id: this.state.comments.length + 1,
      read: false
    });
    const updatedComments = [...this.state.comments, updatedNewComment];
    this.setState({
      comments: updatedComments,
      newComment: {
        username: '',
        text: '',
        imageType: 'retro'
      }
    });
  }

  handleInputChange(event) {
    const updatedNewComment = Object.assign({}, this.state.newComment, {
      [event.target.name]: event.target.value
    });
    this.setState({
      newComment: updatedNewComment
    });
  }

  render() {
    return (
      <div>
        <h1>
          Comments {
            this.state.comments.length !== 0 && `(unread ${this.getNumberOfReadComments(this.state.comments)})`
          }
        </h1>

        <div>
          <form onSubmit={this.onFormSubmit}>
            <input
              name="username"
              type="text"
              value={this.state.newComment.username}
              onChange={this.handleInputChange}
            />
            <textarea
              name="text"
              value={this.state.newComment.text}
              onChange={this.handleInputChange}
            />
            <select
              name="imageType"
              value={this.state.newComment.imageType}
              onChange={this.handleInputChange}
            >
              <option value="wavatar">wavatar</option>
              <option value="monsterid">monsterid</option>
              <option value="retro">retro</option>
            </select>
            <button>submit</button>
          </form>
        </div>

        {this.renderComments(this.state.comments)}
      </div>
    );
  }
}
