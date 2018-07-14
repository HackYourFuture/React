import React from "react";

const Button = ({ class_name, clickHandler, text, index }) => {
    return (
        <button
            id={index}
            style={{ fontSize: "12px" }}
            className={class_name}
            type="button"
            onClick={event => clickHandler(index, event)}
        >
            {text}
        </button>
    );
};

export default Button;