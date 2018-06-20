import React from "react";

const Todoitems = ({todo,id}) =>{
        return(
            <div id={id}>
            <ul>
            {todo}
            </ul>
            </div>
        );
    }


export default Todoitems;