import React, { Component } from "react";
import PostsList from "./posts-list";
import AddForm from "./add-from";
import Service from "./service";
import Header from "./header";

class Post extends Component {
  state = {
    loading: false,
    user: "",
    posts: [],
    form: "home"
  };

  componentDidMount() {
    this.setState({
      loading: true,
      user: this.props.user
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
  handleDelete = post => {
    const index = post.id - 1;

    const posts = [
      ...this.state.posts.slice(0, index),
      ...this.state.posts.slice(index + 1)
    ];
    this.setState({ posts });
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
              user={this.state.user}
              onAnyUpdate={this.handleAnyUpdate}
              onDelete={this.handleDelete}
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
          <AddForm onAdd={this.handleAdd} author={this.state.user} />
        ) : (
          showPosts
        )}
      </div>
    );
  }
}

export default Post;
