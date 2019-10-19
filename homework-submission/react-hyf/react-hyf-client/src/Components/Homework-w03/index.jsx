import React, { useState } from 'react';
import DataFetching from '../fetchdata.js';
import ProfileCard from './Components/ProfileCard';
import HyfButton from '../Homework-w02/components/HyfButton/button';

function Week03() {
  const defaultURL = 'https://uinames.com/api/?ext';
  const maleURL = 'https://uinames.com/api/?ext&&gender=male';
  const femaleURL = 'https://uinames.com/api/?ext&&gender=female';
  const [URL, setURL] = useState(defaultURL);
  const { loading, results, error, setRandomNumber } = DataFetching(URL);

  if (loading || error) {
    return loading ? 'Now Loading...' : error.message;
  }

  const changeToRandom = () => {
    setURL(defaultURL);
  };

  const changeToFemale = () => {
    setURL(femaleURL);
  };

  const changeToMale = () => {
    setURL(maleURL);
  };

  return (
    <div className="Week03">
      <h2>Homework Week03</h2>
      <React.Fragment>
        <ProfileCard props={results} />
        <HyfButton
          className={URL === defaultURL ? 'active-button' : 'inactive-button'}
          name={`Random`}
          toggle={changeToRandom}
        />
        <HyfButton
          className={URL === femaleURL ? 'active-button' : 'inactive-button'}
          name={`Female`}
          toggle={changeToFemale}
        />
        <HyfButton
          className={URL === maleURL ? 'active-button' : 'inactive-button'}
          name={`Male`}
          toggle={changeToMale}
        />
      </React.Fragment>
      <div>
        <HyfButton
          className="randomizer"
          name=">>Click to Generate!<<"
          toggle={() => setRandomNumber(Math.random())}
        />
      </div>
    </div>
  );
}

export default Week03;
