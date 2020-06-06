import React, { useState } from "react";

function Form({ getCity }) {
  const [city, setCity] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    getCity(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input-text"
        type="text"
        placeholder="Search City"
        name="city"
        value={city}
        required
        onChange={e => setCity(e.target.value)}
      >
      </input>
      <input className="input-submit" type="submit" value="search" />
    </form>
  );
}

export default Form;
