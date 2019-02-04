import React from 'react'
import PostServices from '../services/services'
import AddPost from './AddPost'
import LogIn from './LogIn';

export default class showPost extends React.Component {
  state = {
    post: [],
    addStatus: false,
    user: ''
  }

  componentDidMount() {
    PostServices.getPost()
      .then(post => {
        this.setState({ post })
      }).catch(console.error());
  }

  onSignOut = () => {
    this.setState({ user: '' })
  }

  onNewAdd = () => {
    this.setState({ addStatus: true })

  }

  onPostSubmitted = (data) => {
    this.setState({ post: [...this.state.post, data] })
    this.setState({ addStatus: false })
  }

  onUserSubmit = (userName) => {
    this.setState({ user: userName })
  }

  onCancel = () => {
    this.setState({ addStatus: false })
  }

  render() {
    const currentUser = this.state.user;
    const postData = this.state.post;
    const postList = postData.length > 0 ? postData.map(function (item, index) {
      if (item.author === currentUser) {
        return (
          <React.Fragment key={index}>
            <img src={item.photoUrl} alt={item.author + 'photo'} className="post-photo" />
            <h3> {item.description}</h3>
          </React.Fragment>
        )
      }
    }) : <h2> You have no posts </h2>;


    const addStatus = this.state.addStatus ? (
      <React.Fragment>
        <AddPost author={this.state.user} onAddSubmit={this.onPostSubmitted} />
        <input type='button' value='cancel' onClick={this.onCancel} className="button-box" />
      </React.Fragment>
    ) :
      <React.Fragment>
        <input name="signout" type="button" value="signout" onClick={this.onSignOut} className="signout-box" />
        <input type='button' value=" Add New Post" onClick={this.onNewAdd} className="button-box" /><br></br><br></br><br></br>
        {postList}
      </React.Fragment>

    const logedInUser = this.state.user === '' ? (
      <div>
        <LogIn logInHandler={this.onUserSubmit} />
      </div>
    ) :
      <div> {addStatus} </div>

    return (

      <React.Fragment>
        {logedInUser}
      </React.Fragment>
    )
  }
}