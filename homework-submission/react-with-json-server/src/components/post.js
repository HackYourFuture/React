import React from 'react';
import Util from '../utility';

export default class Post extends React.Component {
  state = { editingMode: false }

  handleUpdate = (e) => {
    let updatedItem;
    if (e === "like") {
      let like = this.props.post.like;
      let index = like.indexOf(this.props.userName);
      index !== -1 ? like.splice(index, 1) : like.push(this.props.userName);
      updatedItem = { like };
    } else {
      e.preventDefault();
      updatedItem = { description: e.target.comment.value };
    }
    Util.postJSON(`http://localhost:4000/photos/${this.props.post.id}`, "PATCH", updatedItem)
      .then(res => this.props.updateState(res)).catch(err => console.error(err));
    this.setState({ editingMode: false });
  }

  onDelete = (id) => {
    Util.deleteJSON(`http://localhost:4000/photos/${id}`)
      .then(res => this.props.updateState(id, res)).catch(err => console.error(err));
  }

  sowEditingBtns() {
    return (
      <div>
        <button onClick={() => this.setState({ editingMode: true })} className="edit-post">Edit</button>
        <button onClick={() => this.onDelete(this.props.post.id)} className="del-post">Delete</button>
      </div>
    );
  }

  showForm = () => {
    return (
      <form onSubmit={this.handleUpdate} className="edit-post-form">
        <textarea name="comment" defaultValue={this.props.post.description}></textarea>
        <button type="submit" className="edit-post">Update</button>
        <button type="button" className="del-post"
          onClick={() => this.setState({ editingMode: false })} >Cancel</button>
      </form>
    );
  }

  handleShowPost = () => { this.props.onShowPost(this.props.post.id) };

  render() {
    let isUser = this.props.post.author === this.props.userName && !this.state.editingMode;
    let likes = this.props.post.like.length > 0 ? this.props.post.like.length : "";
    let isLiked = this.props.post.like.indexOf(this.props.userName) !== -1 ? "liked" : "";
    let comments = this.props.post.comment.length > 0 ? this.props.post.comment.length : "";

    return (
      <div className="post">
        <i className="material-icons">person</i>
        <span className="user-name">{this.props.post.author}</span>
        {isUser ? this.sowEditingBtns() : ""}
        <img onClick={this.handleShowPost} src={this.props.post.photoUrl} alt="user" />
        {this.state.editingMode ? this.showForm() : <p>{this.props.post.description}</p>}
        <div className="likes-comments">
          <p>
            <button onClick={() => this.handleUpdate("like")} className={"material-icons like " + isLiked}>thumb_up</button>
            <span className="likes-num">{likes}</span>
          </p>
          <p onClick={this.handleShowPost} className="comment-num">Comments {comments}</p>
        </div>
      </div>
    );
  }
}