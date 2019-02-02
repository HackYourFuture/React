import React, { Component } from 'react';
import Comments from './Comments';
import './App.css';
import AddForm from './AddForm';

class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.reset();
  }

  reset = () => {
    fetch('https://hyf-react-api.herokuapp.com/blog/comments')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  deleteComment = id => {
    fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(response => {
        let newData = this.state.data.filter(comment => response._id !== comment._id);
        this.setState({ data: newData });
      });
  };

  addComment = comment => {
    fetch('https://hyf-react-api.herokuapp.com/blog/comments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then(comment => comment.json())
      .then(comment => {
        this.setState({ data: [...this.state.data, comment] });
      });
  };

  handleUpdate = (updatedItem, id) => {
    fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then(response => response.json())
      .then(response => {
        this.state.data.map(comment => {
          if (comment._id === response._id) {
            response.text = comment.text;
            response.date = comment.date;
            response.author.firstName = comment.author.firstName;
            response.author.lastName = comment.author.lastName;
          }
          return comment;
        });
        this.reset();
      });
  };
  render() {
    let newComments = this.state.data.map(item => (
      <Comments
        key={item._id}
        item={item}
        handleDelete={this.deleteComment}
        handleUpdate={this.handleUpdate}
      />
    ));
    return (
      <div className="App">
        <AddForm addComment={this.addComment} />
        <div className="mean">{newComments}</div>
      </div>
    );
  }
}

export default App;
