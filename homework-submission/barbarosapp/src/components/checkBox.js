import React from "react";

class CheckBox extends React.Component {
  render() {
    const { handleCheck, done, id } = this.props;

    return (
      <div>
        <p>Check ?</p>
        <input
          type="checkbox"
          onChange={() => handleCheck(id)}
          className="CheckBox"
          checked={done}
        />
        <p>{this.props.done ? "Done" : "Undone"}</p>
      </div>
    );
  }
}

export default CheckBox;
