import React, { Fragment } from 'react';
import RegionContainer from './RegionContainer';
import GenderContainer from './GenderContainer';

export default function(props) {
  const { region, onRegionSelect, onGenderSelect } = props;
  return (
    <div className="filter">
      <Fragment>
        <GenderContainer onGenderSelect={onGenderSelect} />
        <RegionContainer region={region} onRegionSelect={onRegionSelect} />
      </Fragment>
    </div>
  );
}
