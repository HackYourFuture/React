import React from 'react'

export default class TodoStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.done || false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      done: !this.state.done
    })
  }


  render() {
    let doneState = 'Not Done'
    if (this.state.done) {
      doneState = 'Done'
    }

    return (
      <div>
        <input type="checkbox"
          checked={this.state.done}
          onChange={this.handleChange}>
        </input>
        <label> {doneState} </label>
      </div>
    )
  }
}
