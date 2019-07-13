import React from 'react';
import InputFields from '../InputFields/InputFields';
import './TaskForm.css';

const TaskForm = props => (
  <form>
    <InputFields onchangeHandler={props.onchangeHandler} />
    <button onClick={props.addTask} className="add-button">
      Add
    </button>
  </form>
);

export default TaskForm;
