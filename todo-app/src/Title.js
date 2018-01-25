import React from 'react';

export default class Title extends React.Component {
    
    render(){
        return(
            <span 
            disabled={this.props.disabled}
            >
              {this.props.titleText}
            </span>
        );
    };
};
