import React from 'react';

class Data extends React.Component {

    render() {
        return (
                <li className='todos'>
                     {this.props.description} , {this.props.deadline}
                </li>
        )
    }
}

export default Data;