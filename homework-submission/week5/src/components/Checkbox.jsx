import React from "react";

export default class Checkbox extends React.Component{

    render(){
        const { type, id, done, handleChecked } = this.props;
        return (
            <input
                key={type + id}
                type={type}
                className={done? "checked" : "unchecked"}
                defaultChecked={done} 
                onInput={() => handleChecked(id)}
            />
        );
    }
}