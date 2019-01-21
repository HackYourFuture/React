import React, { Component } from 'react';
import Comments from './component/Comments';
import './App.css';
import ShowComments from './component/ShowComments';

class App extends Component {
  state = {
    post: [],
  };
  handleSubmit = newPost => {
    this.setState(state => ({
      post: [...state.post, newPost],
    }));
  };

  render() {
    console.log('state from app component', this.state);
    return (
      <div className="App">
        <Comments onSubmitForm={this.handleSubmit} />
        <br />
        <ShowComments data={this.state.post} />
      </div>
    );
  }
}

export default App;
