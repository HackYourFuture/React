import React from 'react';

export default class Deadline extends React.Component{
    
    render(){
        return (
            <div className="Deadline">

               {this.props.time}
              
            </div>
        );
    }
}
    
