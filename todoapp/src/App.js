import React from 'react';
import Comment from './Todo';
import comments from './todo.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      comments: [],
      newComment: {
        text: ''
        
      }
    };

    this.handleReadChange = this.handleReadChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Lifecycle
  componentDidMount() {
      setTimeout(() => {
      this.setState({ comments });
    }, 1000);
  }

  handleReadChange(updatedReadValue, commentId) {
    const updatedComments = this.state.comments.map(comment => {
      if (commentId === comment.id) {
        return Object.assign({}, comment, {read: updatedReadValue});
      }
      return comment;
    });
    this.setState({
      comments: updatedComments
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
          onReadChange={this.handleReadChange}
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
      text: ''
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
          ToDo List {
            this.state.comments.length !== 0 && `(unread ${this.getNumberOfReadComments(this.state.comments)})`
          }
        </h1>
        <div>
          <form onSubmit={this.onFormSubmit}>            
            <textarea
              name="text"
              value={this.state.newComment.text}
              onChange={this.handleInputChange}
            />
            
            <button>submit</button>
          </form>
        </div>

        {this.renderComments(this.state.comments)}
      </div>
    );
  }
}
