import React, { Component } from 'react';
import Comments from './Comments';
import './App.css';
import AddForm from './AddForm';

class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch('https://hyf-react-api.herokuapp.com/blog/comments')
      .then(response => this.checkStatusCode(response))
      .then(data => this.setState({ data }));
  }

  deleteComment = (id, i) => {
    fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        this.state.data.splice(i, 1);
        this.setState({ data: [...this.state.data] });
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

  handleUpdate = (updatedItem, i) => {
    fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${updatedItem._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then(response => response.json())
      .then(response => {
        let newComments = [...this.state.data];
        newComments[i] = response;
        this.setState({ data: newComments });
      });
  };
  checkStatusCode = response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.json();
    }
  };

  render() {
    let newComments = this.state.data.map((item, index) => (
      <Comments
        key={item._id}
        index={index}
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
