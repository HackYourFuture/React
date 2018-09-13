import React from "react";
class List extends React.Component {
  render() {
    return (
      <table className="todoConteiner">
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}
export default List;
