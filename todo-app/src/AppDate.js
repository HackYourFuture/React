import React from 'react';

export class AppDate extends React.Component{
    render(){
    let items = this.props.tasks.map((elem, i)=>{
        return <div>
            <p>Task</p>
            <li key={i}>{elem.description}</li>
              </div>
    })
        return (
            <ul>
               {items}
            </ul>
        );
    }
}