import React from 'react';

const AddTaskForm = props => {
    return ( <form onSubmit = {
            props.handleSubmit
        } >
        <input onChange = {
            props.handleChange
        }
        value = {
            props.value
        }
        /> <button> Add </button> </form>
    );
};

export default AddTaskForm;