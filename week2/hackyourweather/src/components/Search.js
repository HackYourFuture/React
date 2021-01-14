import React from 'react';

import { FaSearch } from 'react-icons/fa';

const Search = ({ handleSearch, cityName, setCityName }) => {
  return (
    <div className="search-form">
      <form>
        <label htmlFor="search"></label>
        <div className="label">
          <input
            type="text"
            name="search"
            placeholder="search city"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
          />
          <FaSearch className="icon" />
        </div>
        <button onClick={(e) => handleSearch(e, cityName)}>search</button>
      </form>
    </div>
  );
};
export default Search;
