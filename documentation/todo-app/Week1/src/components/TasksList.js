import React from "react";

class TasksList extends React.Component {

  render() {
    const list = [
      { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
      { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
      { description: "Eat breakfast", deadline: "Fri Sep 15 2017" }
    ];
    return (
      <div>
        <ul className="list-format">
          <li>{`Description: ${list[0].description}, Deadline: ${list[0].deadline}`}</li>
          <li>{`Description: ${list[1].description}, Deadline: ${list[1].deadline}`}</li>
          <li>{`Description: ${list[2].description}, Deadline: ${list[2].deadline}`}</li>
        </ul>
      </div>
    );
  }

}

export default TasksList;

