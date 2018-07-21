import React from "react"

const TodoList = ({ todoItems, checkboxHandler, removeTodo }) =>
    <div className="todoItems">
        {todoItems.map((elem, index) => {
            return (
                <div key={`elem ${elem.id}`} >
                    {elem.done ? "LineThrough" : ""}
                    {elem.description},
                {new Date(elem.deadline).toDateString()}.
                <input
                        type="checkbox"
                        defaultChecked={elem.done ? true : false}
                        onChange={e => checkboxHandler()}
                    />
                    <button onClick={() => removeTodo()}>Remove</button>

                </div >
            )
        })}
    </div>
export default TodoList;