import React from 'react';
import InputField from '../InputField/InputField';

const InputFields = props => (
  <div>
    <label> Task : </label>
    <InputField
      onchangeHandler={props.onchangeHandler}
      type="text"
      name="description"
      placeholder="Enter the task here "
    />
    <label> Deadline : </label>

    <InputField onchangeHandler={props.onchangeHandler} type="date" name="deadline" />
  </div>
);

export default InputFields;
