import React, { Component } from 'react'
import PostsList from './posts-list'
import AddForm from './add-from'
import Service from './Service'
import Header from './header'

class Post extends Component {
  state = {
    loading: false,
    author: '',
    posts: [],
    form: 'list'
  }

  componentDidMount() {
    this.setState({
      loading: true,
      author: this.props.state.user
    })
    Service.getPosts()
      .then(posts => {
        this.setState({ posts, loading: false })
      })
  }

  switchToAddForm = () => {
    this.setState({ form: 'add' })
  }

  switchToHome = () => {
    this.setState({ form: 'list' })
  }

  render() {
    console.log('postsState: ', this.state);
    let lists = this.state.posts.map((post) => { return <PostsList key={post.id} posts={post} /> })

    let ShowPosts =
      <div>
        <h2 onClick={this.switchToAddForm}>Add New Post</h2>
        {this.state.loading === true ? <h2>Loading...</h2> : lists}
      </div>;


    return (
      <div>
        <Header backToHomePage={this.switchToHome} />
        {this.state.form === 'add' ? <AddForm /> : ShowPosts}
      </div>
    )

  }
}


export default Post;