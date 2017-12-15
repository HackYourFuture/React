import React from 'react'

export default class TaskDeadLine extends React.Component {
     render() {
          return (
               <div className="task-deadline">
               {this.props.deadline}
               </div>
          )
     }
}