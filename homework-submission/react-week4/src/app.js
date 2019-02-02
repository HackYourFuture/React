import React, { Component } from 'react';
import Util from './utility';
import AddingForm from './add-form';
import Comment from './comment';
import EditingForm from './editing-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], editing: "", error: "" }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  refreshPage() {
    Util.fetchList("https://hyf-react-api.herokuapp.com/blog/comments")
      .then(data => this.setState({ data, editing: "" })).catch(err => {
        this.handleError(err);
      });
  }

  componentDidMount() { this.refreshPage() }

  handleCreate(newItem) {
    Util.createItem("https://hyf-react-api.herokuapp.com/blog/comments/create", newItem)
      .then(res => this.refreshPage()).catch(err => {
        this.handleError(err);
      });
  }

  handleEditing(isEditing, id) {
    isEditing ? this.setState({ editing: id }) : this.setState({ editing: "" });
  }

  handleUpdate(e, id) {
    let item;
    if (e.target) {
      e.preventDefault();
      item = { text: e.target.comment.value };
    } else {
      item = { isLiked: !e };
    }
    Util.updateItem(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, item)
      .then(res => this.refreshPage()).catch(err => this.handleError(err));
  }

  handleDelete(id) {
    Util.deleteItem(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`)
      .then(res => this.refreshPage()).catch(err => this.handleError(err));
  }

  handleError(err) {
    console.error(err);
    this.setState({ error: "Something wrong happened, Please try agin!" });
  }

  render() {
    let items = this.state.data.map(item => {
      if (item._id === this.state.editing) {
        return <EditingForm key={item._id} item={item}
          onUpdate={this.handleUpdate} onEdit={this.handleEditing} />
      } else {
        return <Comment key={item._id} item={item} onDelete={this.handleDelete}
          onEdit={this.handleEditing} onLike={this.handleUpdate} />
      }
    });

    return (
      <div className="App">
        <div id="error-message">{this.state.error}</div>
        <AddingForm onCreate={this.handleCreate} />
        {items}
      </div>
    );
  }
}

export default App;
