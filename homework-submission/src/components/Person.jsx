import React from 'react';

const Person = ({ photo, name, surname, region, email, phone }) => (
  <div className="md:flex bg-white rounded-lg p-6 hover:bg-gray-200">
    <img
      className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      src={photo}
      alt={`${name} ${surname}`}
    />
    <div className="text-center md:text-left">
      <h2 className="text-lg">{`${name} ${surname}`}</h2>
      <div className="text-purple-500">{region}</div>
      <div className="text-gray-600">{email}</div>
      <div className="text-gray-600">{phone}</div>
    </div>
  </div>
);

export default Person;
