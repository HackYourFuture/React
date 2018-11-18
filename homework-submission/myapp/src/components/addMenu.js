import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class AddMenu extends React.Component {
  state = {
    name: "",
    deadline: ""
  };

  handleChangeForm = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleChangeDate = date => {
    this.setState({ deadline: date });
  };

  handleSubmitAdd = event => {
    event.preventDefault();
    this.props.todoStore.handleAdd(this.state.name, this.state.deadline);
    this.setState({
      name: "",
      deadline: moment()
    });
  };

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
                placeholder="New Todo name is ..."
                value={this.state.name}
                onChange={this.handleChangeForm}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Deadline : </label>
            </div>
            <div className="col-75">
              <DatePicker
                className="col-75"
                selected={this.deadline}
                onChange={this.handleChangeDate}
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="LLL"
                timeCaption="time"
                showTimeSelect
              />
            </div>
          </div>

          <div className="rowAdd">
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
