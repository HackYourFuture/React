import React from 'react';


export default class Time extends React.Component{
    
    render(){
        return (

            <div>
                {this.props.title}
                {this.props.time}
            </div>
        );
    };
};
    
