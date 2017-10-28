import React from 'react';
import Comment from './Comment';
import comments from './comments.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      comments: []
    };
  }

  // Lifecycle
  componentDidMount() {
    // Imagine this data was coming from an API
    // fetchComments().then(response => {
    //   this.setState({
    //     comments: response.comments
    //   });
    // });
    this.setState({ comments });
  }

  renderComments(comments) {
    // Conditional rendering
    if (comments.length === 0) {
      return <div>No comments...</div>;
    }

    // List and keys
    return comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
        />
      );
    })
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>

        {this.renderComments(this.state.comments)}
      </div>
    );
  }
}
