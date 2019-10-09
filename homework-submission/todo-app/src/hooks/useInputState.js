import { useState } from 'react';
export default defaultValue => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};
