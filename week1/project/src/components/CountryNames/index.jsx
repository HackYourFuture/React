import React from "react";

const CountryNames = ({ ctry_name, ctry_code }) => {
  return (
    <div>
      <h2>
        {ctry_name}, {ctry_code}
      </h2>
    </div>
  );
};

export default CountryNames;
