import React from 'react';

class Description extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.description} </li>
                    <li>{this.props.deadlineDate}</li>
                </ul> 
             </div>
        );
    }
}

export default Description;