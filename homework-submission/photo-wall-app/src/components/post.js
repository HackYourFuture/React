import React, { Component } from 'react'
import PostsList from './posts-list'
import AddForm from './add-from'
import Service from './Service'

class Post extends Component {
  state = {
    loading: false,
    author: '',
    posts: []
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    Service.getPosts().then(posts => {
      this.setState({ posts, loading: false })
    })
  }
  render() {
    let lists = this.state.posts.map((post) => { return <PostsList key={post.id} posts={post} /> })
    return (
      <div>
        this.state.loading === true ? <h2>Loading...</h2> : lists
      </div>
    )
  }
}


export default Post;