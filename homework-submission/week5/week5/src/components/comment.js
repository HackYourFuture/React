import React from 'react'
import PostServices from '../services/services'


export default class CommentOnPost extends React.Component {
  state = {
    text: ''
  }

  onCommentChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  onCommentSubmitted = (e, commentAuthor, post) => {
    if (this.state.text !== '') {
      const newComment = { author: commentAuthor, text: this.state.text }
      post.comment.push(newComment)
      this.props.commentHandler()
      PostServices.editPost(post.id, post).catch(console.error())
      this.setState({ text: '' })


    }
    else {
      alert("Please add comment")
    }
    e.preventDefault();
  }

  render() {
    const commentAuthor = this.props.author;
    const commentForPost = this.props.post;


    return (
      <form onSubmit={(e) => this.onCommentSubmitted(e, commentAuthor, commentForPost)}>
        <input className="button" name="text" type="text" placeholder="Type your comment here" defaultValue={this.state.text} onChange={this.onCommentChange} />
        <input className="button" type="submit" value="Add comments" />
      </form>

    )
  }
}

