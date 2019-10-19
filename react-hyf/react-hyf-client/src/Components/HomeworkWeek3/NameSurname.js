import React from 'react';

const NameSurname = props => {
  return (
    <div className="NameSurname">
      <h1 className="name">{props.name}</h1>
      <h1 className="surname"> {props.surname}</h1>
    </div>
  );
};

export default NameSurname;
