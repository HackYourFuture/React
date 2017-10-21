import React from 'react';

export default class Done extends React.Component{
    render() {
        return (
            <div>
                {this.props.done}
            </div>
        )
    }
}
