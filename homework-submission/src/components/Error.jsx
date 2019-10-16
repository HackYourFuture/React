import React from 'react';

const Error = ({ error }) => (
  <div
    className="bg-red-100 w-2/3 mx-auto m-4 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong className="block font-bold">Error!</strong>
    <span className="block sm:inline">{error.message}</span>
  </div>
);

export default Error;
