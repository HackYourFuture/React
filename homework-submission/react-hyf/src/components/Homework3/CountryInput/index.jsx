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
    <div>
      <select id={'country-selection'} onChange={handleChange}>
        <option value="">Select a country</option>
        {countries.map(c => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>
      <button onClick={handleClick}>Get User</button>
    </div>
  );
}

export default CountryInput;
