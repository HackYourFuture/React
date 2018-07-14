import React from "react";
import Todo from './Todo';

class Todoitems extends React.Component {
    render(){
        const {checkHandler,removeHandler,listItems,editing,editHandler,cancelHandler,saveHandler} = this.props        
        return(
            <div id={this.props.id}>
            <ul> 
            {listItems.map((item)=>(
            <Todo key={item._id} item={item} checkHandler={checkHandler}
            removeHandler={removeHandler} editing={editing}
            editHandler={editHandler} cancelHandler={cancelHandler} saveHandler={saveHandler} />
            ))}
            </ul>
            </div>
            );
        }
    }


export default Todoitems;