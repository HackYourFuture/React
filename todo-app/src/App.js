import React from 'react';
import ListItems from "./List-Items";

export default class App extends React.Component {

  dateString(date) {
    return new Date(date).toDateString();
  }

  render() {
    return (
      <div id="main">
        <h2>Todo list</h2>
        
        <ListItems
          todos={[
            {
              id: 1,
              task: "make dental appointment",
              deadline: this.dateString("March 9, 2018")
            },
            {
              id: 2,
              task: "pay phone bill",
              deadline: this.dateString("March 27, 2018")
            },
            {
              id: 3,
              task: "plan summer vacation",
              deadline: this.dateString("April 14, 2018")
            }
          ]}
        />      
      </div>
    );
  }
}
