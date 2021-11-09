import React from "react";

const Search = (props) => {
  return (
    <form onSubmit={props.fetch}>
      <h2>Weather</h2>
      <input
        name="Search"
        placeholder="City Name"
        type="text"
        onChange={props.setIsSearch}
      />
      <button disabled={!props.isSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
