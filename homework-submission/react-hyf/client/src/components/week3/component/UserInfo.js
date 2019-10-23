import React from 'react';
// import './Homework3.css';

function UserInfo({
  randomUser: { photo, name, surname, phone, birthday, email, gender, region },
}) {
  return (
    <div className="card">
      <img className="card-photo mb-4" src={photo} alt="" />
      <h3 className="text-center">
        {name} -{surname}
      </h3>
      <ul className="list-group d-flex text-left">
        <li className="list-group-item">
          <span>
            <i className="fa fa-venus-double mr-3 text-primary text-bold"></i>
          </span>
          {gender}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-globe mr-2 text-warning text-bold"></i>
          </span>
          {region}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-phone mr-2 text-danger text-bold"></i>
          </span>
          {phone}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-birthday-cake mr-2 text-success text-bold"></i>
          </span>
          {birthday.dmy}
        </li>
        <li className="list-group-item">
          <span>
            <i className="fa fa-envelope mr-2 text-primary text-bold"></i>
          </span>
          {email}
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
