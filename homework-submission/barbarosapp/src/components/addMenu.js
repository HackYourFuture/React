import React from "react";

class AddMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      deadline: ""
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
  }

  handleChangeForm = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitAdd(event) {
    event.preventDefault();
    this.props.handleAdd(this.state.name, this.state.deadline);
    this.setState({ name: "", deadline: "" });
  }

  render() {
    return (
      <div className="AddMenu">
        <form>
          <div className="row">
            <div className="col-25">
              <label>New Todo Name : </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="formName"
                name="name"
                placeholder="New Todo name is .. ."
                value={this.state.name}
                onChange={this.handleChangeForm}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="lname">Deadline : </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="deadline"
                name="deadline"
                placeholder="Deadline is ..."
                value={this.state.deadline}
                onChange={this.handleChangeForm}
              />
            </div>
          </div>

          <div className="row">
            <button className="AddButton" onClick={this.handleSubmitAdd}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMenu;
