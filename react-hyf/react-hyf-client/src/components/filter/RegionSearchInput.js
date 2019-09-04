import React from 'react';

const RegionSearchInput = ({ onChange, searchInput }) => {
  return (
    <input
      ref={searchInput}
      onChange={onChange}
      className="region__search"
      type="text"
      placeholder="Search..."
    />
  );
};

export default RegionSearchInput;
