import React from "react";

const Button = ({ class_name, clickHandler, text, index }) => {
    return (
        <button
            className={class_name}
            type="button"
            id={index}
            onClick={event => clickHandler(index, event)}
        >
            {text}
        </button>
    );
};

export default Button;