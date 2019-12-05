import React from "react";

const CountryNames = ({ country_name, country_code }) => {
  return (
    <div>
      <h2>
        {country_name}, {country_code}
      </h2>
    </div>
  );
};

export default CountryNames;
