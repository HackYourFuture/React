import React, { Component } from 'react';
import './App.css';
import SingingIn from './SignIn';
import Posts from './Posts';
import AddForm from './AddForm';
import Service from './service';
import MaximizePost from './MaximizePost';

class App extends Component {
  state = {
    post: '',
    data: [],
    signIn: false,
    user: '',
    add: false,
    description: '',
    maxPost: {},
    showPost: false,
    comment: '',
  };

  componentDidMount() {
    Service.getPostList().then(data => this.setState({ data }));
  }

  handleSubmitSingingIn = e => {
    e.preventDefault();
    let user = e.target.author.value;
    if (user.length > 0) {
      this.setState({ user: user });
      this.setState({ signIn: true });
    }
  };
  SwitchAddMode = () => {
    this.setState({ add: !this.state.add });
  };
  signingOut = () => {
    this.setState({ signIn: false });
  };
  addPost = post => {
    this.setState({ data: [...this.state.data, post] });
  };
  addComment = comment => {
    this.setState({ comment: this.state.comment });
  };

  deletePost = () => {
    this.setState({ data: this.state.data });
  };

  handleMaximizePost = maxPost => {
    this.setState({ maxPost: maxPost });
    this.setState({ showPost: true });
  };
  minPost = () => {
    this.setState({ showPost: false });
  };

  render() {
    let posts = this.state.data.map((post, index) => (
      <Posts
        key={post.id}
        index={index}
        post={post}
        addComment={this.addComment}
        author={this.state.user}
        handleLike={this.handleLike}
        data={this.state.data}
        deletePost={this.deletePost}
        handleMaximizePost={this.handleMaximizePost}
      />
    ));
    return this.state.signIn ? (
      <div className="container">
        <AddForm
          addPost={this.addPost}
          SwitchAddMode={this.SwitchAddMode}
          author={this.state.user}
        />
        {this.state.showPost ? (
          <div className="max-div">
            <input type="button" value="Back to home" onClick={() => this.minPost()} />
            <MaximizePost
              post={this.state.maxPost}
              user={this.state.user}
              comment={this.state.data.comment}
            />
          </div>
        ) : !this.state.add ? (
          <div className="all-posts">
            <input type="button" value="Sign out" onClick={() => this.signingOut()} />
            {posts}
          </div>
        ) : null}
      </div>
    ) : (
      <SingingIn handleSubmitSingingIn={this.handleSubmitSingingIn} />
    );
  }
}

export default App;
