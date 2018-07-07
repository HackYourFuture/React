import React from "react";

class Todoitems extends React.Component {
    render(){  
        const todoListItems = this.props.listItems.map((item,i)=>
        <li key={item._id} >
        <input type="checkbox"
        onClick={() => this.props.checkHandler(item)}
        defaultChecked={item.done} className="check-item"/> 
        <label className="list-item">
        {item.description} , {new Date(item.deadline).toDateString()} 
        </label>
        <input type="submit" onClick={()=>this.props.removeHandler(item)} value="Remove" name="remove" className="input-button remove"/>
        </li>
        );

        return(
            <div id={this.props.id}>
            <ul>
            {todoListItems}
            </ul>
            </div>
            );
        }
    }


export default Todoitems;