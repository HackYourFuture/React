import React from 'react';
import Gender from './Gender';
import Region from './Region';
import FullName from './Name';

const List = ({ gender, region, name, surname }) => {
  return (
    <div className="list">
      <table>
        <tbody>
          <tr>
            <FullName name={name} surname={surname} />
          </tr>
          <tr>
            <Gender gender={gender} />
          </tr>
          <tr>
            <Region region={region} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
