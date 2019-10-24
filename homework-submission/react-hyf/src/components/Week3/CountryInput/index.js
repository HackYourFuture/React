import React from 'react';

function CountryInput({ handleChange, handleClick }) {
  const countries = [
    'random',
    'Albania',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bangladesh',
    'Belgium',
    'Bosnia and Herzegovina',
    'Brazil',
    'Bulgaria',
    'Canada',
    'China',
    'Colombia',
    'Costa Rica',
    'Crotia',
    'Czech Republic',
    'Denmark',
    'Egypt',
    'England',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'India',
    'Indonesia',
    'Iran',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Korea',
    'Kyrgyz Republic',
    'Mexico',
    'Morocco',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nigeria',
    'Norway',
    'Pakistan',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Saudi Arabia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Tunisia',
    'Turkey',
    'Ukraine',
    'United States',
    'Vietnam',
  ];

  return (
    <div className="input-group col-sm">
      <div className="input-group-prepend">
        <label className="input-group-text">Countries</label>
      </div>
      <select
        className="custom-select"
        aria-label="Country select with button addon"
        onChange={handleChange}
      >
        <option selected>Choose...</option>
        {countries.map(c => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>
      <div class="input-group-append">
        <button onClick={handleClick} type="button" className="btn btn-outline-secondary">
          Get User
        </button>
      </div>
    </div>
  );
}

export default CountryInput;
