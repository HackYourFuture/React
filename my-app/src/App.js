import React, { Component } from 'react';
import './App.css';
import SingingIn from './SignIn';
import Posts from './Posts';
import AddForm from './AddForm';

class App extends Component {
  state = {
    data: [],
    signIn: false,
    user: '',
  };
  componentDidMount() {
    fetch('http://localhost:3000/photos')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handleSubmitSingingIn = e => {
    e.preventDefault();
    let user = e.target.author.value;
    if (user.length > 0) {
      this.setState({ user: user });
      this.setState({ signIn: true });
    }
  };

  addPost = post => {
    fetch('http://localhost:3000/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(post => post.json())
      .then(post => {
        this.setState({ data: [...this.state.data, post] });
      });
  };
  render() {
    let posts = this.state.data.map(post => <Posts key={post.id} post={post} />);

    return this.state.signIn ? (
      <div>
        <AddForm addPost={this.addPost} />
        {posts}
      </div>
    ) : (
      <SingingIn handleSubmitSingingIn={this.handleSubmitSingingIn} />
    );
  }
}

export default App;
