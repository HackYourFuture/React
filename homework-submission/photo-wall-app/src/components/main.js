import React, { Component } from "react";
import PostsList from "./posts-list";
import AddForm from "./add-from";
import Service from "./service";
import Header from "./header";

class Post extends Component {
  state = {
    loading: false,
    author: "",
    posts: [],
    form: "home",
    like: []
  };

  componentDidMount() {
    this.setState({
      loading: true,
      author: this.props.state.user
    });

    Service.getPosts().then(posts => {
      this.setState({ posts, loading: false });
    });
  }
  handleAdd = postInfo => {
    this.setState({
      posts: [...this.state.posts, postInfo],
      form: "home"
    });
  };

  switchForm = () => {
    this.state.form === "home"
      ? this.setState({ form: "add" })
      : this.setState({ form: "home" });
  };

  handleAnyUpdate = newPost => {
    const index = newPost.id - 1;
    const posts = [
      ...this.state.posts.slice(0, index),
      newPost,
      ...this.state.posts.slice(index + 1)
    ];
    this.setState({ posts });
  };

  render() {
    let lists = (
      <div className="posts-list">
        {this.state.posts.map(post => {
          return (
            <PostsList
              key={post.id}
              post={post}
              author={this.state.author}
              onAnyUpdate={this.handleAnyUpdate}
              like={this.state.like}
            />
          );
        })}
      </div>
    );

    let showPosts = (
      <div className="main">
        <h2 onClick={this.switchForm}>Add New Post</h2>
        {this.state.loading === true ? <h2>Loading...</h2> : lists}
      </div>
    );

    return (
      <div>
        <Header backToHomePage={this.switchForm} />
        {this.state.form === "add" ? (
          <AddForm onAdd={this.handleAdd} author={this.state.author} />
        ) : (
          showPosts
        )}
      </div>
    );
  }
}

export default Post;
