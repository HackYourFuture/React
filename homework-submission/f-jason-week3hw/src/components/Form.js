import React from "react";

const Form = ({ submitForm }) => {
    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                name="description"
                placeholder="write the description"
            />
            <input type="text" name="deadline" placeholder="write the deadline" />
            <input type="submit" name="submit" />
        </form>
    );
};

export default Form;