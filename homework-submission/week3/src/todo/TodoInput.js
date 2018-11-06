import React from "react";

class TodoInput extends React.Component {
  state = {
    description: "",
    deadline: "",
    done: false
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAdd = e => {
    e.preventDefault();
    const value = this.state;
    if (value.description.length === 0 || value.deadline.length === 0) {
      return;
    }
    if (!value.deadline.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return;
    }

    this.props.onAdd(value);
    this.setState({
      description: "",
      deadline: ""
    });
  };

  render() {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    const dateValidate = this.state.deadline.match(regEx) ? null : (
      <p>The deadline must be date "YYY-MM-DD"</p>
    );
    return (
      <div className="header">
        <form className="form-inline">
          <input
            type="text"
            name="description"
            onChange={this.onInputChange}
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="description"
            value={this.state.description}
          />
          <input
            type="text"
            name="deadline"
            onChange={this.onInputChange}
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="deadline"
            value={this.state.deadline}
          />
          {dateValidate}
          <button
            type="submit"
            onClick={this.onAdd}
            className="btn btn-primary mb-2"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
