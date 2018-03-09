import React, { Component } from 'react';

// Data
import commentData from './data/comments.json'

// Components
import BlogPost from './components/BlogPost'
import CommentsList from './components/CommentsList'

export default class App extends Component {

  state = {
    comments: commentData,
  }

  handleToggleLike = commentId => {
    const comment = this.state.comments.filter(comment => comment.id === commentId)[0]
    this.setState({
      comments: [
        ...this.state.comments.filter(comment => comment.id !== commentId),
        {
          ...comment,
          isLiked: !comment.isLiked,
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <BlogPost />
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}
