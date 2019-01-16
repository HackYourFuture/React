import React from 'react';

export default class DoneCheckBox extends React.Component {

  componentWillMount() {
    this.setState(({ isChecked }) => (
      {
        isChecked: { ...this.props.isChecked },
      }
    ));
  }

  handleCheck = () => {

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  }

  render() {

    return (
      <input type="checkbox"
        checked={this.state.isChecked}
        onChange={this.handleCheck} />

    );
  }
}