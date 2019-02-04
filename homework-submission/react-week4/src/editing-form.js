import React from 'react';

export default class EditingForm extends React.Component {


  handleSubmit = e => {
    e.preventDefault();
    let item = { text: e.target.comment.value };
    this.props.onUpdate(item, this.props.item._id)
  }

  render() {
    let like = this.props.item.isLiked ? { num: 1, col: "liked" } : { num: 0, style: "" };
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <div className="author">
          <img className="avatar" src={this.props.item.author.avatarURL} alt="Profile" />
          <span className="name">{this.props.item.author.firstName + " " + this.props.item.author.lastName}</span>
          <span className="date">{new Date(this.props.item.date).toLocaleDateString()}</span>
        </div>
        <textarea name="comment" className="textarea" defaultValue={this.props.item.text}></textarea>
        <div className="btns">
          <button onClick={() => this.props.onUpdate(this.props.item.isLiked, this.props.item._id)}
            className={"material-icons " + like.style}>&#xe8dc;</button>
          {like.num}
          <input type="submit" value="Update" className="left-btn" />
          <input type="button" value="Cancel" className="right-btn" onClick={() => this.props.onEdit(false)} />
        </div>
      </form>
    );
  }
}