import React from 'react';

class AddTodo extends React.Component {
  state = {
    description: '',
    done: false
  }
  todo = (element) => {
    this.setState({ [element.target.id]: element.target.value })
  }
  submit = (element) => {
    element.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      description: '',
      done: false,
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <span>Add Todo</span>
          <div>
            <span>Todo description :</span>
            <input type='text' id='description' onChange={this.todo}>
            </input>
          </div>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddTodo