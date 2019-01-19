import React from 'react';

export default class DoneCheckBox extends React.Component {
  render() {

    return (
      <input type="checkbox"
        checked={this.props.done}
        onChange={() => this.props.handleCheck(this.props.index)}
      />
    );
  }
}