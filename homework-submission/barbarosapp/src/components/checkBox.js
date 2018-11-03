import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: true };
  }

  render() {
    const { handleCheck, done, id } = this.props;

    return (
      <div>
        <p>Check ?</p>
        <input
          type="checkbox"
          onChange={() => handleCheck(id)}
          className="CheckBox"
          defaultChecked={done}
        />
        <p>{this.props.done ? "Done" : "Undone"}</p>
      </div>
    );
  }
}

export default CheckBox;
