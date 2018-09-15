import React, { Component } from 'react';
import {inject, observer } from 'mobx-react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import logo from './logo.svg';
import './App.css';
import {toJS} from 'mobx'


@inject('BooksStore')
@observer
class App extends Component {
  componentWillMount(){
    this.props.BooksStore.getPosts();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    return this.props.BooksStore.addBook(e.target.bookName.value);
  }
  
  render() {
    if(this.props.BooksStore.state === 'done') {
    console.log("this.props.BooksStore.getPosts(): ", toJS(this.props.BooksStore.posts));
    }
    const { BooksStore } = this.props;
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book Store</h1>
        </header>
        <h1>You have {BooksStore.bookCount} Books</h1>
        <PostForm/>
        <PostList/>
      </div>;
  }
}

export default App;
