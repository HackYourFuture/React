import React from 'react';

export default class Status extends React.Component{
    render() {
        return (
            <div>
                {this.props.done}
            </div>
        )
    }
}
