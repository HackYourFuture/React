import React from "react";
import EditUpdateCheck from "./EditUpdateCheck";

const TodoList = ({
    TodoListItems,
    index,
    removeTodo,
    toggleUpdating,
    updateTodo
}) => {
    return (
        <div className="todo-list" >
            {
                TodoListItems.map((elem, i) =>
                    <div key={`elem${elem.id}`}>
                        <EditUpdateCheck
                            description={elem.description}
                            deadline={elem.deadline}
                            done={elem.done}
                            index={i}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                            toggleUpdating={toggleUpdating}

                        />
                    </div>
                )
            }
        </div>
    )
}
export default TodoList;