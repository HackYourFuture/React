import React from 'react';
import male from '../Pictures/male.png';
import female from '../Pictures/female.png';

const RenderImg = ({ gender }) => {
  return <img src={gender === 'male' ? male : female} alt={gender} />;
};

export default RenderImg;
