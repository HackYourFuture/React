import React, { Component } from 'react';
class todoTimes extends Component {
          state=
            {
              wakeup:{
                actionTime:"06:00",
                action:"wakeup"
              },
              breakfast:{
                actionTime:"07:00",
                action:"break fast"
              },
              lunch:{
                actionTime:"12:00",
                action:"lunch"
              }

            }


         render(){
           return(
             <div>
               <p>{this.state.wakeup.action +"   " +this.state.wakeup.actionTime}</p>
               <p>{this.state.breakfast.action +"   " + this.state.breakfast.actionTime}</p>
               <p>{this.state.lunch.action +"   " + this.state.lunch.actionTime}</p>

             </div>
           )
         }
}
export default todoTimes;
