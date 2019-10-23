import React from "react";

const Name = ({ name, surname }) => (
  <li>
    <h1 className="name">
      {name} {surname}
    </h1>
  </li>
);

export default Name;
