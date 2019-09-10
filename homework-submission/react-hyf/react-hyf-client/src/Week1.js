import React from 'react';
import Back from './Back';

const ListItem = ({ description, deadLine, done }) => {
  return <li className={done}>{description + ', ' + deadLine}</li>;
};

const Week1 = () => {
  return (
    <div>
      <Back />
      <h2>Static list</h2>
      <ul>
        <ListItem description="Get out of bed" deadLine="Wed Sep 13 2017" />
        <ListItem description="Brush teeth" deadLine="Thu Sep 14 2017" />
        <ListItem description="Eat breakfast" deadLine="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};

export default Week1;
