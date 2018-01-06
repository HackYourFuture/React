import React, { Component } from 'react';
import Task from './Task' 
import tasks from './tasks.json'

export default class App extends Component {

     constructor (props){
          super(props);
          
          this.state = {
            tasks: tasks,
       };
          
          this.handelDoneTasks = this.handelDoneTasks.bind(this);
       
     }
     
     handelDoneTasks(isDone,taskId){
          const updatedTasks = this.state.tasks.map(task => {
               if(taskId === task.id) {
                    return Object.assign({}, task, {done: isDone});
               }
               return task;
          });
          this.setState({
               tasks: updatedTasks,
          });    
     }
     
     render() {
          if(this.state.tasks.length == 0){
               return (
               <div>
                    <h1>Let's do this:</h1>
                    <div>No items</div>
               </div>
                    );
          }
          return (
               <div>
                 <h1>Let's do this:</h1>
                 <ul className='tasks'>
                    {this.state.tasks.map(item => <Task key={item.id} task={item} onDone={this.handelDoneTasks} />)}
		       </ul>
               </div>
          );
     }
}