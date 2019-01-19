import React from 'react';

let isDone = false;

export default class DoneCheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isDone: this.props.done };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck = () => {
    this.setState({
      isDone: !this.state.isDone

    })
  }

  render() {

    return (
      <input type="checkbox"
        checked={this.state.isDone}
        onChange={this.handleCheck} />
    );
  }
}