import React from 'react'

export default class AppTask extends React.Component {
     render() {
          return (
               <span>
                 {this.props.task}
               </span>
          )
     }
}