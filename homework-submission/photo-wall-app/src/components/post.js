import React, { Component } from 'react'
import ListPosts from './list-posts'
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
    // let lists = 
    return (
      this.state.loading === true ? <h2>Loading...</h2> : <p>lists</p>
    )
  }
}


export default Post;