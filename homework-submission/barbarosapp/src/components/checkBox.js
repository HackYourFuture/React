import React from "react";

class CheckBox extends React.Component {
  render() {
    const { handleCheck, done, id } = this.props;

    return (
      <input
        type="checkbox"
        onChange={() => handleCheck(id)}
        className="CheckBox"
        defaultChecked={done}
      />
    );
  }
}

export default CheckBox;
