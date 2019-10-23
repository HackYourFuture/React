import React from "react";
const femaleIcon = <span>&#9792;</span>;
const maleIcon = <span>&#9794;</span>;
const Gender = ({ gender }) => (
  <li className="gender">
    {gender === "male" ? maleIcon : femaleIcon} {gender}
  </li>
);

export default Gender;
