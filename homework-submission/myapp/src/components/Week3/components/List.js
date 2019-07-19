import React from 'react';
import Gender from './Gender';
import Region from './Region';
import FullName from './Name';

const List = ({ name, surname, gender, region }) => {
  return (
    <div className='list'>
      <ul>
        <li>
          <FullName name={name} surname={surname} />
        </li>

        <li>
          <Gender gender={gender} />
        </li>
        <li>
          <Region region={region} />
        </li>
      </ul>
    </div>
  );
};

export default List;
