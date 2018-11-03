import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class AddMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      deadline: moment()
    };

    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeForm = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitAdd = event => {
    event.preventDefault();
    this.props.handleAdd(this.state.name, this.state.deadline);
    this.setState({ name: "" });
    this.setState({ deadline: moment() });
  };

  handleChangeDate = date => {
    this.setState({
      deadline: date
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
              <DatePicker
                className="col-75"
                selected={this.state.deadline}
                onChange={this.handleChangeDate}
                minDate={moment()}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
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
