import React from "react";
import TodoItems from "./TodoItems.json";

class TasksList extends React.Component {

  state = {
    TodoItems
  }

  taskCompleted = TodoItems.map((item) => {
    if (item.done === false) {
      item.done = true;
    } else if (item.done === true) {
      item.done = false;
    }
    // return item;
    this.setState({
      TodoItems: this.state.TodoItems.map(item => {
        item.done = item.done;
      })
    });
    console.log(TodoItems.done);
  });


  render() {
    return (
      <div>
        <ul className="list-format">
          {TodoItems.map((item) => {
            return <li key={item}><button onClick={this.props.taskCompleted}>Completed!</button>
              {`${item.id} - Description: ${item.description}, Deadline: ${item.deadline}`}</li>
          })}

        </ul>
      </div>
    );
  }

}

export default TasksList;