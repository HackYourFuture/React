import React from 'react';

export default class Post extends React.Component {

  state = { editingMode: false }

  handleShowPost = () => { this.props.onShowPost(this.props.post.id) }

  sowEditingBtns() {
    return (
      <div>
        <button onClick={() => this.setState({ editingMode: true })} className="edit-post">Edit</button>
        <button onClick={() => this.props.onDelete(this.props.post.id)} className="del-post">Delete</button>
      </div>
    );
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.props.onUpdate({
      id: this.props.post.id,
      updatedPost: e.target.comment.value
    });
    this.setState({ editingMode: false });
  }

  showForm = () => {
    return (
      <form onSubmit={this.handleUpdate}>
        <input type="text" name="comment" defaultValue={this.props.post.description} />
        <button type="submit" >Update</button>
        <input type="button" onClick={() => this.setState({ editingMode: false })} value="Cancel" />
      </form>
    );
  }

  render() {
    let isUser = this.props.post.author === this.props.userName.toLowerCase();
    let likes = this.props.post.like.length > 0 ? this.props.post.like.length : "";
    let isLiked = this.props.post.like.indexOf(this.props.userName) !== -1 ? "liked" : "";
    return (
      <div className="post">
        <i className="material-icons">person</i>
        <span className="user-name">{this.props.post.author}</span>
        {isUser && !this.state.editingMode ? this.sowEditingBtns() : ""}
        <img onClick={this.handleShowPost} src={this.props.post.photoUrl} alt="user" />
        {this.state.editingMode ? this.showForm() : <p>{this.props.post.description}</p>}
        <div className="likes-comments">
          <p>
            <button onClick={() => this.props.onUpdate({ id: this.props.post.id, comment: "like" })} className={"material-icons like " + isLiked}>thumb_up</button>
            <span className="likes-num">{likes}</span>
          </p>
          <p onClick={this.handleShowPost} className="comment-num">Comments {this.props.post.comment.length > 0 ? this.props.post.comment.length : ""}
          </p>
        </div>
      </div>
    );
  }
}