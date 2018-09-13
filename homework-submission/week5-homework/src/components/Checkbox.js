import React from "react";
class Checkbox extends React.Component {
  render() {
    let done = this.props.done;
    return (
      <button onClick={this.props.onClick} className="checkbox">
        {done ? <i className="fa fa-times" /> : ""}
      </button>
    );
  }
}
export default Checkbox;