import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Post from './components/Post';
import PhotoZoom from './components/Photo'

class App extends Component {
  state = {
    zoom: false,
    selectedPost: [],
    sessionUser: ''
  }


  onZoomPhoto = (post, user) => {
    this.setState({ zoom: true })
    this.setState({ selectedPost: post })
    this.setState({ sessionUser: user })
  }

  cancelZoom = (sessionAuthor) => {
    this.setState({ zoom: false })
    this.setState({ sessionUser: sessionAuthor })
  }

  render() {
    const zoomIn = this.state.zoom;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <React.Fragment>
          {zoomIn ?
            <PhotoZoom post={this.state.selectedPost} author={this.state.sessionUser} onCancelZoom={this.cancelZoom} /> : <Post onZoom={this.onZoomPhoto} />
          }
        </React.Fragment>
      </div>
    );
  }
}

export default App;
