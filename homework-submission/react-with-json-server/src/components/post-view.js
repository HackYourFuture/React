import React from 'react';
import Util from '../utility';
import Comment from './comment';

export default class PostView extends React.Component {

  onAddAndLike = (e) => {
    const { post, userName } = this.props;
    let updatedItem;
    if (e) {
      e.preventDefault();
      updatedItem = { comment: post.comment };
      updatedItem.comment.push({ author: userName, text: e.target.comment.value });
      e.target.reset();
    } else {
      updatedItem = { like: post.like };
      let index = updatedItem.like.indexOf(userName);
      index !== -1 ? updatedItem.like.splice(index, 1) : updatedItem.like.push(userName);
    }
    Util.postJSON(`http://localhost:4000/photos/${post.id}`, "PATCH", updatedItem)
      .then(res => this.props.updateState(res)).catch(err => console.error(err));
  }

  handleUpdateComment = (index, action) => {
    const { post } = this.props;
    let updatedItem;
    if (action) {
      updatedItem = { comment: post.comment };
      updatedItem.comment[index].text = action;
    } else {
      updatedItem = { comment: post.comment };
      updatedItem.comment.splice(index, 1);
    }
    Util.postJSON(`http://localhost:4000/photos/${post.id}`, "PATCH", updatedItem)
      .then(res => this.props.updateState(res)).catch(err => console.error(err));
  }

  handleShowPost = () => { this.props.onShowPost(null) };

  render() {
    const { post, userName } = this.props;
    let isLiked = post.like.indexOf(userName) !== -1 ? "liked" : "";

    return (
      <div className="post view">
        <i className="material-icons">person</i>
        <span className="user-name">{post.author}</span>
        <img onClick={this.handleShowPost} src={post.photoUrl} alt="user" />
        <p>{post.description}</p>
        <div className="likes-comments">
          <p>
            <button onClick={() => this.onAddAndLike()} className={"material-icons like " + isLiked}>thumb_up</button>
            <span className="likes-num">{post.like.length > 0 ? post.like.length : ""}</span>
          </p>
          <p className="comment-num">Comments {post.comment.length > 0 ? post.comment.length : ""}</p>
        </div>
        {post.comment.map((comment, i) => <Comment key={i} i={i} comment={comment} userName={userName} onUpdate={this.handleUpdateComment} />)}
        <form onSubmit={this.onAddAndLike} className="comments-form">
          <input type="text" name="comment" required />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
