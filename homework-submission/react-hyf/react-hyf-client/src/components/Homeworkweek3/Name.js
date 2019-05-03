import React from 'react';

const FullName = ({ name, surname }) => {
  return (
    <div className="name">
      {name} {surname}
    </div>
  );
};
export default FullName;
