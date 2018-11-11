import React from "react";

class CheckBox extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { done: "" };
  // }

  render() {
    const { handleCheck, done, id } = this.props;
    console.log(done, id)
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
