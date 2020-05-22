import React from "react";

function Button(props) {
    return (
        <button onClick={props.onclick}>
        Add 1!
        </button>
    );
}

export default Button;