import React from 'react';
// import './Homework3.css';

function UserInfo({ randomUser }) {
  return (
    <div className="card">
      <img className="card-photo mb-4" src={randomUser.photo} alt="" />
      <h3 className="text-center">
        {randomUser.name} -{randomUser.surname}
      </h3>
      <ul className="list-group d-flex text-left">
        <li className="list-group-item">
          <span>
            <i className="fa fa-venus-double mr-3 text-primary text-bold"></i>
          </span>
          {randomUser.gender}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-globe mr-2 text-warning text-bold"></i>
          </span>
          {randomUser.region}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-phone mr-2 text-danger text-bold"></i>
          </span>
          {randomUser.phone}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-birthday-cake mr-2 text-success text-bold"></i>
          </span>
          {randomUser.birthday.dmy}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-envelope mr-2 text-primary text-bold"></i>
          </span>
          {randomUser.email}
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
