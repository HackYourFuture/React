import React from "react";
import TodoItems from "./TodoItems.json";

class TasksList extends React.Component {

  state = {
    // taskCompletion: false
    TodoItems
  }

  // listState = {
  //   todoItem: TodoItems
  // }

  taskCompleted = () => {
    // console.log(Object.keys(this.state.todoItem));
    // this.setState({ taskCompletion: true });
    if (Object.keys(this.state.TodoItems) === false) {
      this.setState({ taskCompletion: true })
    } else if (Object.keys(this.state.TodoItems) === true)
      this.setState({ taskCompletion: false });
    console.log(this.state.taskCompletion);




  }

  render() {

    return (
      <div>
        <ul className="list-format">
          {TodoItems.map((obj) => {
            return <li key={obj.id}><button onClick={this.taskCompleted}>Completed!</button>
              {`${obj.id} - Description: ${obj.description}, Deadline: ${obj.deadline}`}</li>
          })}

        </ul>
      </div>
    );
  }

}

export default TasksList;

