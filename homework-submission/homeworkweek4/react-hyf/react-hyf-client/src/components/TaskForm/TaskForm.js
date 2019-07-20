import React from 'react';
import InputFields from '../InputFields/InputFields';
import './TaskForm.css';

const TaskForm = ({ onChangeHandler, addTask }) => (
  <form>
    <InputFields onChangeHandler={onChangeHandler} />
    <button onClick={addTask} className="add-button">
      Add
    </button>
  </form>
);

export default TaskForm;
