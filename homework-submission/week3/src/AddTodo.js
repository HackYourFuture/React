import React from "react";


class AddTodo extends React.Component {
  state = {
    description: '',
    deadline: '',
    done: false
  }

  onValueChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.description, this.state.deadline);
    this.setState({ description: '' });
    this.setState({ deadline: '' });

  }

  render() {
    return (<div id='addTodo'>
      <h1>Add New Task:</h1>
      <form onSubmit={this.onSubmitHandler}>
        <>
          <label >
            Description:
           <input id='box' type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.onValueChange} required />
          </label>
          <br /><br />
          <label>
            Deadline:
            <input id='box' type="date" name="deadline" placeholder="Deadline" value={this.state.deadline} onChange={this.onValueChange} required />
          </label>
          <br /><br />
          <input id="list-button" type="submit" value="Add Comment" />
        </>
      </form>
    </div>);
  }
}

export default AddTodo;






