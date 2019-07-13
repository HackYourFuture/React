import React from 'react';
import male from '../../Pictures/male';
import female from '../../Pictures/female';

const RenderImg = ({ gender }) => {
  return <img src={gender === 'male' ? male : female} alt={gender} />;
};

export default RenderImg;
