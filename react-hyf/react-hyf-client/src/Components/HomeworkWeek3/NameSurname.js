import React from 'react';

const NameSurname = props => {
  return (
    <div className="NameSurname">
      <h1 className="NameSurname">
        {props.name} {props.surname}
      </h1>
    </div>
  );
};

export default NameSurname;
