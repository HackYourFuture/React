import React from 'react';

class Data extends React.Component {

    render() {
        return (
            <ul className='todos'>
                {this.props.description} , {this.props.deadline}
            </ul>
        )
    }
}

export default Data;