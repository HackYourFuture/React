import React from "react";
import Todolist from './Todolist';

class Description extends React.Component {
    render(){
        console.log(Todolist);
        const listItem = Todolist.map((item,i)=>
            <li key={"item_"+i}>{item.description} , {item.date}</li>
            );
        return(
            <div id={this.props.id}>
            <ul>
            {listItem}
            </ul>
            </div>
        );
    }
}

export default Description;