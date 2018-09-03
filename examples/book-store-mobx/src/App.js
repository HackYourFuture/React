import React, { Component } from 'react';
import {inject, observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';

@inject('BooksStore')
@observer
class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    return this.props.BooksStore.addBook(e.target.bookName.value);
  }

  render() {
    const { BooksStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book Store</h1>
        </header>
        <h1>You have {BooksStore.bookCount} Books</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Add a book" name="bookName" ref={input => (this.bookName = input)} />
        </form>
        <ul>
          {BooksStore.books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
