import React from 'react'

export default class TaskText extends React.Component {

  render() {
    return (
      <span className="task-text">
        {this.props.text}
      </span>
    )
  }

}