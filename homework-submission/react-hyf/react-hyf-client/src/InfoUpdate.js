import React from 'react';
import './infoUpdate.css';

const Info = ({ data, mdy }) => {
  const { gender, region, age, email, phone, birthday } = data;
  return (
    <div className='userInfo'>
      <span className='subInfo'>
        <p>
          {gender === 'male' ? <i className='fa fa-male' /> : <i className='fa fa-female' />}
          <span>{gender}</span>
        </p>
        <p>
          <i className='fa fa-globe'></i>
          <span>{region}</span>
        </p>
        <p>
          <i className='fa fa-at'></i>
          <span>{email}</span>
        </p>
      </span>
      <span className='subInfo'>
        <p>
          <i className='fa fa-birthday-cake'></i>
          {birthday && birthday ? <span>{birthday.dmy}</span> : null}
        </p>
        <p>
          <i className='fa fa-heartbeat'></i>
          <span>{age}</span>
        </p>
        <p>
          <i className='fa fa-phone'></i>
          <span>{phone}</span>
        </p>
      </span>
    </div>
  );
};

export default Info;
