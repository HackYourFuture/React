import React from 'react';
import CommentsServices from '../services/services'

export default class AddComment extends React.Component {
  state = {
    text: '',
    isLiked: false,
    author: {
      firstName: '',
      lastName: '',
      avatarURL: '',
    },
  }

  onCommentChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('Name')) {
      this.setState({ author: { ...this.state.author, [name]: value } });
    } else {
      this.setState({ [name]: value });
    }
  }


  onCommentSubmitted = (e) => {
    CommentsServices.PostComment({
      text: this.state.text,
      date: Date(),
      isLiked: false,
      author: {
        firstName: this.state.author.firstName,
        lastName: this.state.author.lastName,
        avatarURL: ""
      }
    }).then(Comment => {
      this.props.onCommentSubmitted(Comment)
    })
    e.preventDefault()
    this.setState({
      text: '',
      isLiked: false,
      author: {
        firstName: '',
        lastName: '',
        avatarURL: ''
      }
    })

  }

  render() {
    return (
      <form onSubmit={this.onCommentSubmitted}>
        <input className="button" name="firstName" type="text" placeholder="First Name" value={this.state.author.firstName} onChange={this.onCommentChange} />
        <input className="button" name="lastName" type="text" placeholder="Last Name" value={this.state.author.lastName} onChange={this.onCommentChange} />
        <input className="button" name="text" type="text" placeholder="Type your comment here" value={this.state.text} onChange={this.onCommentChange} />
        <input className="button" type="submit" value="Add comments" />
      </form>

    )


  }
}