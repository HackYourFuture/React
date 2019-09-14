import React from 'react';

const FlagIcon = props => {
  let className = `flag-icon flag-icon-squared flag-icon-${props.code}`;

  return (
    <i
      style={{ borderRadius: '100%', transform: 'scale(2)' }}
      className={className}></i>
  );
};

export default FlagIcon;
