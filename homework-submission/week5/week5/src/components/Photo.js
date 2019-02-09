import React from 'react'
import CommentOnPost from './comment'
import PostServices from '../services/services'

export default class PhotoZoom extends React.Component {
  state = {
    updateComment: '',
    edit: false,
    commentIndex: '',
    text: '',
    addComment: false
  }

  onCommeting = () => {
    this.setState({ addComment: false })

  }
  onAddComment = () => {
    this.setState({ addComment: true })
  }

  changedValue = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  onEdit = (index) => {
    this.setState({ edit: true, commentIndex: index })

  }
  onCancel = () => {
    this.setState({ edit: false })

  }
  onUpdateComment = (e, post, index) => {
    const id = post.id;
    if (this.state.updateComment !== '') {
      post.comment[index].text = this.state.updateComment;
      PostServices.editPost(id, post).catch(console.error())
      e.preventDefault();
      this.setState({ text: '', edit: false })

    }
    else {
      alert("Please add comment")
    }
  }

  onDeleteComment = (e, post, index) => {
    const id = post.id;
    post.comment.splice(index, 1)
    PostServices.editPost(id, post).catch(console.error())
    e.preventDefault();
    this.setState({ edit: false })
  }



  render() {
    const zoomedPost = this.props.post;
    const sessionAuthor = this.props.author;

    const comments = zoomedPost.comment.length > 0 ? zoomedPost.comment.map((item, index) => {
      if (item.author === sessionAuthor) {
        return (
          <React.Fragment key={index}>
            <p>{item.author} : {item.text} </p>
            <input type="button" name='edit' value='Edit' onClick={() => this.onEdit(index)} className='box' />
            <input type="button" name='delete' value='Delete' onClick={(e) => this.onDeleteComment(e, zoomedPost, index)} className='box' />
            {this.state.edit && index === this.state.commentIndex ?
              <div>
                <input name='updateComment' type='text' defaultValue={item.text} onChange={this.changedValue} className='box' />
                <button type="submit" onClick={(e) => this.onUpdateComment(e, zoomedPost, index)} >Update</button>
                <button onClick={this.onCancel} >Cancel</button>
              </div>
              : <></>
            }
          </React.Fragment>
        )
      }
      else {
        return (
          <div key={index}>
            <p>{item.author} : {item.text} </p>
          </div>
        )
      }
    })
      : <h3> No comment</h3>


    return (
      <React.Fragment>
        <img src={zoomedPost.photoUrl} alt={zoomedPost.id} className="post-photo" />
        <br></br>
        <h2> {zoomedPost.description}</h2>
        <input type="button" name='addComment' value='Add Comment' onClick={this.onAddComment} className='box' />
        {this.state.addComment ?
          <CommentOnPost author={sessionAuthor} post={zoomedPost} commentHandler={this.onCommeting} /> : <></>
        }



        <div className="comments">
          <h3> comment :</h3>
          {comments}
        </div>
        <span className="comments">
          <h3>Likes :</h3>
          {zoomedPost.like.join(", ")}
        </span>

        <br></br>
        <input type='button' value='cancel' onClick={() => this.props.onCancelZoom(sessionAuthor)} className="button-box" />
      </React.Fragment>
    )
  }

}
