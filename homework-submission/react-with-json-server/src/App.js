import React, { Component } from 'react';
import Util from './utility.js';
import Login from "./components/login-form";
import AddingForm from "./components/add-form";
import Post from "./components/post";
import PostView from './components/post-view';

export default class App extends Component {
  state = {
    userName: "",
    login: false,
    posts: [],
    postView: null
  }

  loginLogout = (e) => {
    if (this.state.login) {
      this.setState({ login: false, userName: "", posts: [] });
    } else {
      e.preventDefault();
      let name = e.target.userName.value.toLowerCase();
      Util.fetchJSON("http://localhost:4000/photos")
        .then(posts => this.setState({ userName: name, login: true, posts }))
        .catch(err => console.error(err));
    }
  }

  updateState = (newPost, action) => {
    let posts
    if (!newPost.id) {
      posts = this.state.posts.filter(post => post.id !== newPost);
    } else if (action === "add") {
      posts = this.state.posts; posts.push(newPost);
    } else {
      posts = this.state.posts;
      posts.forEach(oldPost => {
        if (oldPost.id === newPost.id) {
          oldPost.author = newPost.author;
          oldPost.description = newPost.description;
          oldPost.comment = newPost.comment;
          oldPost.like = newPost.like;
        }
      });
    }
    this.setState({ posts });
  }

  showPost = (id) => {
    if (!id) return this.setState({ postView: null });
    let postView = this.state.posts.find(post => post.id === id);
    this.setState({ postView });
  }

  userPage = () => {
    let postView = this.state.postView, user = this.state.userName;
    if (postView) {
      return (
        <div id="user-page">
          <PostView post={postView} userName={user} onShowPost={this.showPost} updateState={this.updateState} />
          <button onClick={this.loginLogout} id="logout">Logout</button>
          <span id="welcome-user">Welcome {this.state.userName}</span>
        </div>
      );
    } else {
      return (
        <div id="user-page">
          {<AddingForm userName={user} updateState={this.updateState} />}
          {!this.state.posts[0] ? <h1>No posts...</h1> : this.state.posts.map(post => <Post key={post.id} post={post} userName={user} onShowPost={this.showPost} updateState={this.updateState} />)}
          <button onClick={this.loginLogout} id="logout">Logout</button>
          <span id="welcome-user">Welcome {this.state.userName}</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="container">
        {this.state.login ? this.userPage() : <Login onLogin={this.loginLogout} />}
      </div>
    );
  }

}