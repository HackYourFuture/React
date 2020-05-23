import React from "react";

function Button({onclick}) {
    return (
        <button onClick={onclick}>
        Add 1!
        </button>
    );
}

export default Button;