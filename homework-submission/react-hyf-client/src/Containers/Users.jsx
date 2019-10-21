import React, { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button';
import User from '../components/User';
import Region from '../components/Region';
import { countries } from '../services/countries';
import Spinner from '../components/Spinner';
import ErrorModal from '../Error/ErrorModal.jsx';
const Users = () => {
  const [data, setData] = useState([]);
  const [randomUser, setRandomUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState('random');
  const [region, setRegion] = useState('random');
  const [isShowing, setIsShowing] = useState(false);
  const [changed, setChange] = useState(false);
  const [error, setError] = useState();

  const fetchData = useCallback(async () => {
    try {
      await fetch(`https://uinames.com/api/?amount=30&gender=${gender}&region=${region}&ext`)
        .then(res => res.json())
        .then(res => {
          setData(res);
          setIsLoading(false);
        });
    } catch (error) {
      setError(error.message);
    }
  }, [gender, region]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getUserHandler = useCallback(
    e => {
      e.preventDefault();
      if (data.length > 0) {
        if (e.keyCode === 32) {
          const index = Math.floor(Math.random() * data.length);
          const newData = [data[index]];
          setRandomUser(newData);
          setChange(true);
        }
      }
      return null;
    },
    [data],
  );

  useEffect(() => {
    window.addEventListener('keyup', getUserHandler);
    // Remove event listeners on cleanup
    return () => {
      return window.addEventListener('keyup', getUserHandler);
    };
  }, [getUserHandler]);

  const queryGenderHandler = gender => {
    setGender(gender);
  };
  console.log('dd');

  const queryRegionHandler = ct => {
    const country = ct.toLocaleLowerCase('en-NL');
    setRegion(country);
  };

  const showCountriesHandler = () => {
    setIsShowing(!isShowing);
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError} errorMessage={error} />}
      <Button
        value={<i className="fas fa-random"></i>}
        clicked={() => queryGenderHandler('random')}
      />
      <Button value={<i className="fas fa-mars"></i>} clicked={() => queryGenderHandler('male')} />
      <Button
        value={<i className="fas fa-venus"></i>}
        clicked={() => queryGenderHandler('female')}
      />
      <Button
        value={
          isShowing ? (
            <i className="fas fa-minus-circle"></i>
          ) : (
            <i className="fas fa-globe-europe"></i>
          )
        }
        clicked={showCountriesHandler}
      />
      <p className="space_bar">
        {changed ? <i className="fas fa-exchange-alt"></i> : 'Press SpaceBar'}
      </p>
      {isLoading ? <Spinner /> : <User isLoading={isLoading} data={data} randomUser={randomUser} />}
      {isShowing ? <Region queryRegionHandler={queryRegionHandler} countries={countries} /> : null}
    </div>
  );
};

export default Users;
