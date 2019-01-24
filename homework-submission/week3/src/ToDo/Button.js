import React from "react"

export default class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.index)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.text}
      </button>
    )
  }
}

