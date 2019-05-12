import React from 'react';

const Info = props => {
  const { data } = props;
  return (
    <div>
      <ul>
        <li>{data.gender}</li>
        <li>{data.region}</li>
      </ul>
    </div>
  );
};

export default Info;
