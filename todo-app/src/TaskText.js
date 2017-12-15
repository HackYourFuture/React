import React from 'react'

export default class TaskText extends React.Component {

  render() {
    return (
      <p className="task-text">
        {this.props.text}
      </p>
    )
  }

}