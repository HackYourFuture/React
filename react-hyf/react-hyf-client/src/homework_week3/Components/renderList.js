import React from 'react';

const ListItem = ({ icon, content }) => {
  return (
    <li>
      <span role="img" aria-label="icon">
        {' '}
        {icon}
      </span>
      {content}
    </li>
  );
};
const RenderList = ({ gender, region }) => {
  return (
    <ul className="renderlist">
      <ListItem content={gender} icon="👤" />
      <ListItem content={region} icon="🌐" />
    </ul>
  );
};

export default RenderList;
