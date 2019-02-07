import React, { Component } from 'react';
import Util from './utility.js';
import Login from "./login-form.js";
import AddingForm from "./add-form.js";
import Post from "./post.js";
import PostView from './post-view';

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
        .then(posts => this.setState({
          userName: name,
          login: true,
          posts
        }))
        .catch(err => console.error(err));
    }
  }

  updateState = (newPost, updated) => {
    let posts
    if (!newPost.id) {
      posts = this.state.posts.filter(post => post.id !== newPost);
    } else if (updated === "add") {
      posts = this.state.posts;
      posts.push(newPost);
    } else {
      posts = this.state.posts;
      posts.forEach(post => {
        if (post.id === newPost.id) {
          post.author = newPost.author;
          post.description = newPost.description;
          post.comment = newPost.comment;
          post.like = newPost.like;
        }
      });
    }
    this.setState({ posts });
  }

  handleAdd = (newPost) => {
    Util.postJSON("http://localhost:4000/photos", "POST", newPost)
      .then(res => this.updateState(res, "add")).catch(err => console.error(err));
  }

  handleUpdate = (item) => {
    let updatedPost;
    if (item.updatedPost) updatedPost = { description: item.updatedPost };
    if (item.comment) {
      let like = this.state.posts.find(el => el.id === item.id).like;
      let index = like.indexOf(this.state.userName);
      index !== -1 ? like.splice(index, 1) : like.push(this.state.userName);
      updatedPost = { like };
    } else if (item.newComment) {
      let comment = this.state.posts.find(el => el.id === item.id).comment;
      comment.push({ author: item.author, text: item.newComment });
      updatedPost = { comment };
    } else if (item.updatedComment) {
      let comment = this.state.posts.find(el => el.id === item.id).comment;
      comment[item.index].text = item.updatedComment;
      updatedPost = { comment };
    } else if (item.index) {
      let comment = this.state.posts.find(el => el.id === item.id).comment;
      comment.splice(item.index, 1);
      updatedPost = { comment };
    }
    Util.postJSON(`http://localhost:4000/photos/${item.id}`, "PATCH", updatedPost)
      .then(res => this.updateState(res)).catch(err => console.error(err));
  }

  handleDelete = (id) => {
    Util.deleteJSON(`http://localhost:4000/photos/${id}`)
      .then(res => this.updateState(id, res)).catch(err => console.error(err));
  }

  showPost = (id) => {
    if (id) {
      let postView = this.state.posts.find(post => post.id === id);
      this.setState({ postView });
    } else {
      this.setState({ postView: null });
    }
  }

  userPage = () => {
    if (this.state.postView) {
      return (
        <div id="user-page">
          <PostView post={this.state.postView} userName={this.state.userName}
            onShowPost={this.showPost} onUpdate={this.handleUpdate} />
          <button onClick={this.loginLogout} id="logout">Logout</button>
          <span id="welcome-user">Welcome {this.state.userName}</span>
        </div>
      );
    } else {
      return (
        <div id="user-page">
          {<AddingForm userName={this.state.userName} onAdd={this.handleAdd} />}
          {this.state.posts[0] ? this.state.posts.map(post => <Post key={post.id}
            post={post} userName={this.state.userName} onShowPost={this.showPost}
            onUpdate={this.handleUpdate} onDelete={this.handleDelete} />) : <h1>No posts...</h1>}
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