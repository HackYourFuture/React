import React, { Component } from "react";
import "./App.css";
import CommentForm from "./components/commentForm";
import Server from "./components/server";
import CommentsList from "./components/commentsList";


class App extends Component {

  state = {
    loading: false,
    comments: []
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    Server.getComments().then(comments =>
      this.setState({ comments, loading: false }));
  }

  handleAdd = (newComment) => {
    this.setState(
      {
        loading: false,
        comments: [...this.state.comments, newComment]
      })
  }

  handleDelete = (id) => {
    const comments = this.state.comments.filter(comment => comment._id !== id);
    this.setState({ comments })
  }

  render() {
    const commentsArr = this.state.comments.length > 0 && this.state.comments.map((comment) => {
      return <CommentsList key={comment._id} comments={comment} onDelete={this.handleDelete} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <p className="title">your opinion matters... give comment to this picture</p>
        </header>
        <div className="app-body">
          <div className="left-side">
            <img
              src="https://i.pinimg.com/originals/b3/bb/94/b3bb945a960ed78ebfd725e31e2cb956.jpg"
              className="App-pic"
              alt="pic"
            />
            <CommentForm onAdd={this.handleAdd} />
          </div>
          <div className="right-side">
            {this.state.loading === true ? <p>Loading...</p> : commentsArr}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
