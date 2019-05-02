import React from 'react';

const FullName = ({ name, surname }) => {
  return (
    <table>
      <tr className="name">
        {name} {surname}
      </tr>
    </table>
  );
};
export default FullName;
