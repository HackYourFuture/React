import React from 'react'

export default class AppDate extends React.Component {
     render() {
          return (
               <span>
               {this.props.deadline}
               </span>
          )
     }
}