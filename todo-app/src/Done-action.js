import React from 'react';

export default class DoneActions extends React.Component{
    render() {
        return (
            <div>
                {this.props.done}
            </div>
        )
    }
}