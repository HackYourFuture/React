import React from 'react';

export default class Comment extends React.Component {

  handleEdit = () => this.props.onEdit(true, this.props.item._id);
  handleRemove = () => this.props.onDelete(this.props.item._id);
  handelLike = () => {
    let item = { isLiked: !this.props.item.isLiked };
    this.props.onLike(item, this.props.item._id);
  }

  render() {
    let like = this.props.item.isLiked ? { num: 1, style: "liked" } : { num: 0, style: "" };
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    let date = new Date(this.props.item.date).toLocaleDateString("en-US", options)
    return (
      <div className="comment-box">
        <div className="author">
          <img className="avatar" src={this.props.item.author.avatarURL} alt="Profile" />
          <span className="name">
            {this.props.item.author.firstName + " " + this.props.item.author.lastName}</span>
          <span className="date">{date}</span>
        </div>
        <p className="text">{this.props.item.text}</p>
        <div className="btns">
          <button onClick={this.handelLike} className={"material-icons " + like.style}>&#xe8dc;</button>
          {like.num}
          <input type="button" value="Edit" className="left-btn" onClick={this.handleEdit} />
          <input type="button" value="Remove" className="right-btn" onClick={this.handleRemove} />
        </div>
      </div >
    );
  }
}
