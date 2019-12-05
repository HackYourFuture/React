import React, { useState } from "react";
import "./Search.css";

const Search = props => {
  const [city, setCity] = useState("");
  const handleInputChange = e => {
    setCity(e.target.value);
  };

  const handleClick = e => {
    props.handleSubmit(city);
    e.preventDefault();
    setCity("");
  };
  return (
    <form onSubmit={e => handleClick(e)}>
      <input
        type="text"
        placeholder="Please type a country"
        value={city}
        onChange={e => handleInputChange(e)}
        required
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
