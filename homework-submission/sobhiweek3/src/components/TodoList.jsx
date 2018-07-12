import React from "react";
import TaskAndDate from "./TaskAndDate";
import todos from "./todos.json";

const TodoList = (props) =>

    <div className = 'todo-list'>

        {todos.map((elem) =>
           <TaskAndDate
              key={elem.id}
              description={elem.description}
              deadline={elem.deadline} 
            />
        )}

    </div>

export default TodoList;