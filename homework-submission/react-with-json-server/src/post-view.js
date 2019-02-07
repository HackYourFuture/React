import React from 'react';
import Comment from './comment';

export default class PostView extends React.Component {

  handleShowPost = () => { this.props.onShowPost(null) }

  handleAddComment = (e) => {
    e.preventDefault();
    this.props.onUpdate({
      id: this.props.post.id,
      author: this.props.userName,
      newComment: e.target.comment.value
    });
    e.target.reset();
  }

  handleUpdateComment = (item) => {
    if (item === "like") {
      this.props.onUpdate({ id: this.props.post.id, comment: item });
    } else {
      item.id = this.props.post.id;
      this.props.onUpdate(item);
    }
  }
  handleDeleteComment = (index) => {
    this.props.onUpdate({ id: this.props.post.id, index: index });
  }

  render() {
    let likes = this.props.post.like.length > 0 ? this.props.post.like.length : "";
    let isLiked = this.props.post.like.indexOf(this.props.userName) !== -1 ? "liked" : "";
    return (
      <div className="post view">
        <i className="material-icons">person</i>
        <span className="user-name">{this.props.post.author}</span>
        <img onClick={this.handleShowPost} src={this.props.post.photoUrl} alt="user" />
        <p>{this.props.post.description}</p>
        <div className="likes-comments">
          <p>
            <button onClick={() => this.handleUpdateComment("like")}
              className={"material-icons like " + isLiked}>thumb_up</button>
            <span className="likes-num">{likes}</span>
          </p>
          <p className="comment-num">Comments {this.props.post.comment.length > 0 ? this.props.post.comment.length : ""}</p>
        </div>
        {this.props.post.comment.map((comment, i) => <Comment key={i} i={i} comment={comment} userName={this.props.userName} onUpdate={this.handleUpdateComment} onDelete={this.handleDeleteComment} />)}
        <form onSubmit={this.handleAddComment} className="comments-form">
          <input type="text" name="comment" required />
          <button type="submit">Add</button>
        </form>

      </div>
    );
  }
}
