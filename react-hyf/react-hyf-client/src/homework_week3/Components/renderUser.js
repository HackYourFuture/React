import React from 'react';
import RenderImg from './renderImg';
import RenderList from './renderList';
import './renderUser.css';

const RenderUser = props => {
  return (
    <div className="container3">
      {props.data.map(({ gender, name, surname, region }, index) => {
        return (
          <div key={index} className="renderUser">
            <RenderImg gender={gender} />
            <h2>
              {name} {surname}
            </h2>
            <RenderList gender={gender} region={region} />
          </div>
        );
      })}
    </div>
  );
};

export default RenderUser;
