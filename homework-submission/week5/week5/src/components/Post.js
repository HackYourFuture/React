import React from 'react'
import PostServices from '../services/services'
import AddPost from './AddPost'
import LogIn from './LogIn';


export default class showPost extends React.Component {
  state = {
    post: [],
    addStatus: false,
    user: '',
    editStatus: false,
    isLiked: false,
    updateDescription: '',
    postIndex: ''

  }

  onPhotoClicked = (index) => {
    const selectedPhoto = this.state.post[index];
    this.props.onZoom(selectedPhoto, this.state.user)
  }

  onReload = () => {
    PostServices.getPost()
      .then(post => {
        this.setState({ post })
      }).catch(console.error());

  }


  changedValue = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
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
    this.onReload();
  }

  onCancel = () => {
    this.setState({ addStatus: false })
    this.setState({ editStatus: false })
  }
  onLike = (e, index) => {
    const newPostLike = this.state.post[index];
    if (!newPostLike.like.includes(this.state.user)) {
      newPostLike.like.push(this.state.user)
      PostServices.editPost(newPostLike.id, newPostLike).catch(console.error())
      e.preventDefault();
      this.setState({ isLiked: true })
    }

  }
  onUnLike = (e, index) => {
    const newPostLike = this.state.post[index];
    if (newPostLike.like.includes(this.state.user)) {
      const userIndex = newPostLike.like.indexOf(this.state.user)
      newPostLike.like.splice(userIndex, 1)
      PostServices.editPost(newPostLike.id, newPostLike).catch(console.error())
      e.preventDefault();
      this.setState({ isLiked: false })
    }
  }

  onEdit = (index) => {
    this.setState({ editStatus: true, postIndex: index })
  }

  onDeletePost = (e, index) => {
    const id = this.state.post[index].id
    const newPost = this.state.post;
    newPost.splice(index, 1)
    PostServices.deletePost(id).catch(console.error())
    this.setState({ post: newPost })
    e.preventDefault();

    // another way with id
    // const newPost = this.state.post.filter(item => item.id !== id);
    // PostServices.deletePost(id).catch(console.error())
    // this.setState({ post: newPost })
    //  e.preventDefault();

  }

  onUpdate = (e, index) => {
    const newPost = this.state.post[index];
    newPost.description = this.state.updateDescription;
    PostServices.editPost(newPost.id, newPost).catch(console.error())
    e.preventDefault();
    this.setState({ editStatus: false })
  }

  render() {
    const postData = this.state.post;
    const postList = postData.length > 0 ? postData.map((item, index) => {
      const currentUser = this.state.user === item.author ? true : false;
      return (
        <React.Fragment key={index}>
          <img src={item.photoUrl} alt={item.author + 'photo'} className="post-photo" onClick={() => this.onPhotoClicked(index)} />
          <br></br>
          <h3> {item.description}</h3>
          <br></br>
          <p> {item.like.length} Likes , {item.comment.length} Comments</p>
          <br></br>
          <input type="button" name='liked' value='like ☻' onClick={(e) => this.onLike(e, index)} className='like-button' />
          <input type="button" name='unliked' value='Unlike ☺' onClick={(e) => this.onUnLike(e, index)} className='like-button' />
          <br></br>
          <br></br>
          {currentUser ?
            <div>
              <input type="button" name='edit' value='Edit' onClick={() => this.onEdit(index)} className='like-button' />
              <input type="button" name='delete' value='Delete' onClick={(e) => this.onDeletePost(e, index)} className='like-button' />
            </div> : <></>
          }
          {this.state.editStatus && currentUser && index === this.state.postIndex ?
            <div>
              <input name='updateDescription' type='text' defaultValue={item.description} onChange={this.changedValue} className='box' />
              <button type="submit" onClick={(e) => this.onUpdate(e, index)} >Update</button>
              <button onClick={this.onCancel} >Cancel</button>
            </div> : <></>
          }
        </React.Fragment>
      )

    }) : <h2> You have no posts </h2>;


    const addStatus = this.state.addStatus ? (
      <React.Fragment>
        <AddPost author={this.state.user} onAddSubmit={this.onPostSubmitted} />
        <input type='button' value='cancel' onClick={this.onCancel} className="button-box" />
      </React.Fragment>
    ) :
      <React.Fragment>
        <input name="signout" type="button" value="Log out" onClick={this.onSignOut} className="signout-box" />
        <input type='button' value=" Add New Post" onClick={this.onNewAdd} className="button-box" /><br></br><br></br>
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