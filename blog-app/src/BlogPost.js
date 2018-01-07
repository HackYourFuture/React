import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Moment from 'moment'
import {loadComments, saveComments} from './storage'

const fakeAuthor = {
  firstName: "Joost",
  lastName:  "Lubach",
  avatarURL: "https://pbs.twimg.com/profile_images/845196505279455233/IUV3v-jP_400x400.jpg"
};

export default class BlogPost extends React.Component {

  state = {
    comments: loadComments()
  };

  setComments(comments) {
    this.setState({comments});
    saveComments(comments);
  }

  newCommentWithText(text) {
    const ids = this.state.comments.map(comment => comment.id);

    return {
      id:     ids.length === 0 ? 1 : Math.max(...ids) + 1,
      author: fakeAuthor,
      date:   Moment().format('YYYY-MM-DD'),
      text:   text
    };
  }

  handleToggleIsLiked = (commentID) => {
    this.setComments(this.state.comments.map(comment => {
      if (comment.id === commentID) {
        return {...comment, isLiked: !comment.isLiked};
      } else {
        return comment
      }
    }));
  };

  handleCommentAdd = commentText => {
    const comment = this.newCommentWithText(commentText);
    this.setComments([comment, ...this.state.comments]);
  };

  handleCommentSave = (id, text) => {
    this.setComments(this.state.comments.map(comment => {
      if (comment.id === id) {
        return {...comment, text};
      } else {
        return comment;
      }
    }));
  };

  render() {
    return (
      <div className="BlogPost">
        <h1 className="BlogPost-title">
          {this.props.title}
        </h1>

        <div className="BlogPost-attribution">
          By {this.props.author}
        </div>
        <div className="BlogPost-date">
          Written: {this.props.date.toLocaleString()}
        </div>

        <div className="BlogPost-body">
          {this.props.children}
        </div>

        <h2>Comments:</h2>
        <CommentList
          comments={this.state.comments}
          onToggleIsLiked={this.handleToggleIsLiked}
          onSaveComment={this.handleCommentSave}
        />

        <h2>Add new comment:</h2>
        <CommentForm
          onCommentAdd={this.handleCommentAdd}
        />
      </div>
    )
  }

}