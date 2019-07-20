import React from 'react';
import InputField from '../InputField/InputField';

const InputFields = ({ onChangeHandler }) => (
  <div>
    <label> Task : </label>
    <InputField
      onChangeHandler={onChangeHandler}
      type="text"
      name="description"
      placeholder="Enter the task here "
    />
    <label> Deadline : </label>

    <InputField onChangeHandler={onChangeHandler} type="date" name="deadline" />
  </div>
);

export default InputFields;
