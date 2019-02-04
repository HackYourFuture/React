import React from 'react';

export default class AddingForm extends React.Component {

  state = { showFrom: false };

  showHeading = () => {
    return (
      <header className="header">
        <h1 className="header-h1">Photo Wall</h1>
        <p onClick={() => this.setState({ showFrom: true })}>Add a Photo</p>
      </header>
    );
  }

  showForm = () => {
    return (
      <form onSubmit={this.props.handleSubmit} className="adding-form">
        <h1 onClick={() => this.setState({ showFrom: false })}>Photo Wall</h1>
        <label>Photo URL</label>
        <input type="text" name="url" />
        <label>Description</label>
        <input type="text" name="description" />
        <input type="submit" value="Add" />
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.state.showFrom ? this.showForm() : this.showHeading()}
      </div>
    );
  }
}





/*

  // state = {
  //   description: "",
  //   status: "Done"
  // }

  // onInputChange = (e) => {
  //   this.setState({ description: e.target.value });
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ status: "Loading" });
  //   let item = JSON.stringify({
  //     description: e.target.description.value,
  //     deadline: Date(),
  //     done: true
  //   });
  //   Util.postJSON("https://hyf-react-api.herokuapp.com/todos/create", item).then(res => {
  //     this.props.onAdd(res);
  //     this.setState({ status: "done" })
  //   }).catch(err => {
  //     console.log("Error ", err);
  //     this.setState({ status: "error" })
  //   });

  // }

      <form onSubmit={this.onSubmit}>
        <h4> {this.state.status === "error" ? "Error" : "Done"}</h4>
        <input type="text" name="description" value={this.state.description} onChange={this.onInputChange} />
        <input type="submit" value="Add Todo" />
      </form>
*/