import React from 'react';

const Info = ({ gender, region }) => {
  return (
    <div>
      <p>
        {gender === 'male' ? <i className="fa fa-male" /> : <i className="fa fa-female" />}
        {gender}
      </p>
      <p>
        <i class="fa fa-globe"></i>
        {region}
      </p>
    </div>
  );
};

export default Info;
