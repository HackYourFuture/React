import React from "react";


class Todo extends React.Component{
    render(){
    const {item,editing,checkHandler,removeHandler,editHandler,saveHandler,cancelHandler} = this.props
    const listItem = (
                <span >
                <input type="checkbox"
                    onClick={()=>checkHandler(item)}
                    defaultChecked={item.done} className="check-item"/> 
                <label className="list-item">
                {item.description} , {new Date(item.deadline).toDateString()} 
                </label>
                <input type="submit" onClick={()=>removeHandler(item)} value="Remove" name="remove" className="input-button remove"/>
                <input type="submit" onClick={()=>editHandler(item)} value="Edit" name="edit" className="input-button edit"/>
                </span>);
    const editForm = (
                <div>
                <form className="edit-form" onSubmit={(e)=>saveHandler(e,item)}>
                <input type="text" name="description" placeholder="Description..." id="edit-description" className="edit-input"/>
                <input type="date" name="deadline" placeholder="Deadline" className="edit-input" />
                <input type="submit"  name="add" value="save" id="save"  className="input-button save"/>
                <input type="button" onClick={cancelHandler} name="cancel" value="cancel" id="cancel"  className="input-button cancel"/>
                </form>
                </div>
            );
    return (
        <li >
        {editing === item._id  ? editForm : listItem }
        </li>
    );
}
}
export default Todo;

