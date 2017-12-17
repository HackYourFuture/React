import React from 'react'

export default class TaskDeadLine extends React.Component {
     render() {
          return (
               <span className="task-deadline">
               {this.props.deadline}
               </span>
          )
     }
}