import React from 'react';
import Button from './Button';

export default function SearchCity({ inputValue, setInputValue, submit }) {

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
 
    return (
      <form>
      <input
        className="Input"
        name="Input"
        type="text"
        placeholder="Search City"
        onChange={handleChange}
        value={inputValue}
        required
    />
      <Button onSubmit={submit}/>
      </form>
    );
  }