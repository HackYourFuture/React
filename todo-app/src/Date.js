import React from 'react';


export default class Date extends React.Component{
    render() {
        return (
            <div>
                {this.props.date.toDateString()}
            </div>
        );
    }
}
