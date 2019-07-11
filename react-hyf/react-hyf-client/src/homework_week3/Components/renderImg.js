import React from 'react';

const RenderImg = ({ gender }) => {
  return (
    <img
      src={gender === 'male' ? require('../Pictures/male.png') : require('../Pictures/female.png')}
      alt={gender}
    />
  );
};

export default RenderImg;
