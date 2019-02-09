import React from 'react';
import Util from '../utility';
import Comment from './comment';

export default class PostView extends React.Component {

  onAddAndLike = (e) => {
    let updatedItem;
    if (e) {
      e.preventDefault();
      let comment = this.props.post.comment;
      comment.push({ author: this.props.userName, text: e.target.comment.value });
      updatedItem = { comment };
      e.target.reset();
    } else {
      let like = this.props.post.like;
      let index = like.indexOf(this.props.userName);
      index !== -1 ? like.splice(index, 1) : like.push(this.props.userName);
      updatedItem = { like };
    }
    Util.postJSON(`http://localhost:4000/photos/${this.props.post.id}`, "PATCH", updatedItem)
      .then(res => this.props.updateState(res)).catch(err => console.error(err));
  }

  handleUpdateComment = (index, action) => {
    let updatedItem;
    if (action) {
      let comment = this.props.post.comment;
      comment[index].text = action;
      updatedItem = { comment };
    } else {
      let comment = this.props.post.comment;
      comment.splice(index, 1);
      updatedItem = { comment };
    }
    Util.postJSON(`http://localhost:4000/photos/${this.props.post.id}`, "PATCH", updatedItem)
      .then(res => this.props.updateState(res)).catch(err => console.error(err));
  }

  handleShowPost = () => { this.props.onShowPost(null) };

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
            <button onClick={() => this.onAddAndLike()}
              className={"material-icons like " + isLiked}>thumb_up</button>
            <span className="likes-num">{likes}</span>
          </p>
          <p className="comment-num">Comments {this.props.post.comment.length > 0 ? this.props.post.comment.length : ""}</p>
        </div>
        {this.props.post.comment.map((comment, i) => <Comment key={i} i={i} comment={comment} userName={this.props.userName} onUpdate={this.handleUpdateComment} />)}
        <form onSubmit={this.onAddAndLike} className="comments-form">
          <input type="text" name="comment" required />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
