import React , {Component} from 'react';


export default class Todo extends Component{
  
render(){
 let {task,date,deadline} = this.props;   
 return(
<div className = "todo">
<h3> {task}</h3>
<span> Date : <strong>{date}</strong></span>
<h4>Deadline: {deadline}</h4>

</div>

 )   
}




}