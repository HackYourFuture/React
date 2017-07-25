import React from 'react';

export default class DeleteAllButton extends React.Component{
    render(){
        return(
            <button onClick={this.props.handleDeleteAll}>
                Delete all Tasks
                </button>
        )
    }
}