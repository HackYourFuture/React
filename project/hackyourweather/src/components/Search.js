import React from "react";
import "./search.css";

const Search = (props) => {
  return (
    <form className="search__bar" onSubmit={props.fetch}>
      <input
        name="Search"
        placeholder="City Name"
        type="text"
        onChange={props.setIsSearch}
        className="search__value"
      />
      <button disabled={!props.isSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
