import React from 'react';

export class AppTask extends React.Component{
    render(){
       let date = this.props.tasks.map((elem, i)=>{
           return <div>
               <p>Dead line</p>
               <li key={i}>{elem.deadline}</li>
               </div>
       })
           return(
               <ul>
                  {date}
               </ul>
           );
    }
}