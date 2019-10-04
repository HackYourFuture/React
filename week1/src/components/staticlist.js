import React, { Component } from 'react'

class Staticlist extends Component {
   
    render() {
        return (
         <div className="staticlist">
            <ul>
                <li> {this.props.description}/<b>Deadline :</b> {this.props.deadline}</li>
            </ul>
        </div>
        )
    }
}
export default Staticlist;