import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("BooksStore")
@observer
class PostList extends Component {
  render() {
    const { BooksStore } = this.props;
    return (
      <ul>
        {BooksStore.books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    );
  }
}

export default PostList;
