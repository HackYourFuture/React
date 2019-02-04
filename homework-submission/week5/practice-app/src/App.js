import React, { Component } from 'react';
import Login from './components/login';
import HomeScreen from './components/HomeScreen';
import AddPhotos from './components/AddPhotos';
import GetInfo from './services/GetInfo';
import './App.css';

class App extends Component {
  state = {
    userName: '',
    isLoggedIn: false,
    mainInfo: [],
  };

  handelLogin = userLoginInfo => {
    this.setState({
      userName: userLoginInfo,
      isLoggedIn: true,
    });
  };

  componentDidMount() {
    GetInfo.getMainInfo().then(mainInfo =>
      this.setState({
        mainInfo,
      }),
    );
  }

  onPostSubmit = newPost => {
    this.setState({ mainInfo: [...this.state.mainInfo, newPost] });
  };

  render() {
    return this.state.userName === '' ? (
      <div className="App">
        <Login onLogin={this.handelLogin} />
      </div>
    ) : (
      <div className="App">
        <AddPhotos mainInfo={[...this.state.mainInfo]} addPost={this.onPostSubmit} />
        <HomeScreen mainInfo={[...this.state.mainInfo]} />
      </div>
    );
  }
}

export default App;
