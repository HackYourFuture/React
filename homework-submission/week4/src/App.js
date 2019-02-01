import React, { Component } from 'react';
import './App.css';
import './index.css'
import Blog from './components/blog'
import CommentsServices from './services/services'
import AddComment from './components/AddComment'
import CommentList from './components/CommentList'


class App extends Component {
  state = {
    comments: []
  }

  componentDidMount() {
    CommentsServices.getComments()
      .then(comments => {
        this.setState({ comments })
      })
  }
  CommentAdd = (comment) => {
    this.setState({ comments: [...this.state.comments, comment] })

  }

  DeleteComment = (id) => {
    const newComments = this.state.comments.filter(comment => comment._id !== id);
    this.setState({ comments: newComments })
  }
  editComment = (id, data) => {
    const newComment = this.state.comments.map(comment => {
      if (comment._id === id) {
        return {
          ...comment,
          text: data.text,
          isLiked: data.isLiked
        };
      }
      return comment;
    })

    this.setState({ comments: newComment })
  };


  render() {
    return (
      <div >
        <Blog />
        <AddComment className='add-comment' onCommentSubmitted={this.CommentAdd} />
        <CommentList comments={this.state.comments}
          onCommentDeleted={this.DeleteComment}
          updateHandler={this.editComment} />
      </div>
    );
  }
}

export default App;
