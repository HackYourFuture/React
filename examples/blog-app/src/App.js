import React, { Component } from 'react';
import moment from 'moment';

// Data
import commentData from './data/comments.json';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';

// Components
import BlogPost from './components/BlogPost';
import CommentsList from './components/CommentsList';

export default class App extends Component {

  state = loadFromLocalStorage() || {
    comments: commentData,
  };

  componentDidUpdate = () => saveToLocalStorage(this.state);

  handleCreateComment = (fields) => {
    const ids = this.state.comments.map(comment => comment.id);
    const newId = Math.max(...ids) + 1;
    const newComment = {
      ...fields,
      id: newId,
      createdAt: moment().format('YYYY-MM-DD')
    };
    this.setState({
      comments: [
        ...this.state.comments,
        newComment,
      ]
    });
  };

  handleToggleLike = commentId => {
    const newCommentList = this.state.comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          isLiked: !comment.isLiked,
        };
      }
      return comment;
    });
    this.setState({ comments: newCommentList });
  };

  render() {
    return (
      <div>
        <BlogPost />
        <CommentsList
          comments={this.state.comments}
          handleToggleLike={this.handleToggleLike}
          handleCreateComment={this.handleCreateComment}
        />
      </div>
    );
  }
}
