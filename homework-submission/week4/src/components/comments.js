import React from 'react';
import CommentsServices from '../services/services'

export default class Comments extends React.Component {
  state = {
    edit: false,
    text: '',
    isLiked: false
  }

  changedValue = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });

  }

  onDeleteComment = (id) => {
    CommentsServices.deleteComment(id)
      .then(
        this.props.onCommentDeleted(id)
      )
  }
  onEdit = () => {
    this.setState({
      edit: true
    });
  };

  onCancel = () => {
    this.setState({
      edit: false
    });
  }



  onUpdate = (e, id, isLiked) => {
    const { name } = e.target
    const likeStatus = (name === 'isLiked') ? { [name]: !isLiked } : { text: this.state.text, date: Date() }
    CommentsServices.editComment(id, likeStatus).then(comment => {
      this.props.updateHandler(comment._id, comment)
    })
    e.preventDefault()
    this.setState({
      edit: false,
      text: '',
      isLiked: false
    })

  }



  render() {
    const comment = this.props.comment;
    const editStatus = this.state.edit ? (
      <React.Fragment>
        <input className="button" name='text' type='text' placeholder={comment.text} onChange={this.changedValue} />
        <button className="button" type="submit" onClick={(e) => this.onUpdate(e, comment._id)} >Update</button>
        <button className="button" onClick={this.onCancel} >Cancel</button>
      </React.Fragment>
    ) : (
        <React.Fragment>
          {comment.text}
          <input className="button" type="button" value="edit" onClick={this.onEdit} />
        </React.Fragment>
      )



    return (
      <div key={comment._id}>
        {editStatus}
        <input className="button" type="button" name='isLiked' value={comment.isLiked ? "♥" : "♡"} onClick={(e) => this.onUpdate(e, comment._id, comment.isLiked)} />
        <input className="button" type="button" value="Delete" onClick={() => this.onDeleteComment(comment._id)} />
        {comment.date}
        <br /><br />
        {comment.author.firstName} {comment.author.lastName}
        <br /><br />
      </div>
    )
  }
}