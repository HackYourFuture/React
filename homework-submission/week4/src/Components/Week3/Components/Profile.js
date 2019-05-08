import React from 'react';
import Gender from './Gender';
import Region from './Region';
import FullName from './FullName';

const Profile = ({ gender, region, name, surname }) => {
  return (
    <div>
      <table className={'profile-table'}>
        <tbody>
          <tr className={'profile-row'}>
            <FullName name={name} surname={surname} />
          </tr>
          <tr className={'profile-row'}>
            <Gender gender={gender} />
          </tr>
          <tr className={'profile-row'}>
            <Region region={region} />
          </tr>
        </tbody>  
      </table>
    </div>
  );
};

export default Profile;
