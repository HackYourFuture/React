import React, { Component } from 'react';
class Element extends Component {
    state = { 
        describtion: this.props.describtion,
        deadlineDate: this.props.deadlinedate
     }
    render() { 
        const {describtion, deadlineDate} = this.state;
        return ( 
            <li className="list-group-item m-1">
                {describtion + ', ' + deadlineDate}
            </li>
         );
    }
}
 
export default Element;