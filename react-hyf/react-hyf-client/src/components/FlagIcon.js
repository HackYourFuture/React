import React from 'react';

export default function FlagIcon(props) {
  let className = `flag-icon flag-icon-${props.code}`;
  if (props.squared) {
    className += ' flag-icon-squared';
  }
  return <i className={className}></i>;
}
