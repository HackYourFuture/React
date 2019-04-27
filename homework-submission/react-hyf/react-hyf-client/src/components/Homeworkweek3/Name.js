import React from 'react';

const FullName = ({ name, surname }) => {
  return (
    <td className="name">
      {name} {surname}
    </td>
  );
};

export default FullName;
