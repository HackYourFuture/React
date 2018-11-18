import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class AddMenu extends React.Component {
   render() {
    const { todoStore } = this.props;
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
                value={this.name}
                onChange={todoStore.handleChangeForm()}
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
                onChange={todoStore.handleChangeDate()}
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
              />
            </div>
          </div>

          <div className="rowAdd">
            <button className="AddButton" onClick={todoStore.handleSubmitAdd()}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMenu;
