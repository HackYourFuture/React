import React from "react";

export default class List extends React.Component {
    
    render(){
        return (
        <ul className={this.props.title}>
        {this.props.content}
        </ul>
        );
    }
}