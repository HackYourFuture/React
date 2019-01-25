import React from 'react';
class CheckBox extends React.Component {
  render() {
    const { todo } = this.props;
    return <input type="checkbox" onChange={this.props.handler} id={todo.id} defaultChecked={todo.done} />;
  }
}
export default CheckBox;