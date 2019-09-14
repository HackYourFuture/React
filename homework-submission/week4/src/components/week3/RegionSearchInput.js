import React from 'react';
import { TextField } from '@material-ui/core';

export const RegionSearchInput = ({ onChange, searchInput }) => (
  <TextField
    fullWidth
    inputRef={searchInput}
    onChange={onChange}
    type="search"
    label="Search"
    variant="outlined"
  />
);

export default RegionSearchInput;
