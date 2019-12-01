import React, { useState } from 'react';

function Form(props) {
  const [cities, setCities] = useState('');

  const handleCity = e => {
    setCities(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = e => {
    props.onSubmitForm({ cities });
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label>
          <input name="city" type="text" onChange={e => handleCity(e)} />
        </label>

        <label>
          <input value="Insert City" type="submit" />
        </label>
      </form>
    </div>
  );
}

export default Form;
