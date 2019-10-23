import React, { useState, useEffect } from 'react';
import PersonCard from '../PersonCard';
import Error from '../Error';
import Title from '../Title';

const People = ({ title }) => {
  const [person, setPerson] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetchPeople();
  };

  const fetchPeople = async () => {
    try {
      setIsLoaded(false);
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://uinames.com/api/?amount=1&&ext=photos',
      );
      const data = await response.json();
      setPerson(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const { photo, name, surname, region, email, phone } = person;

  return (
    <div>
      <Title title={title} />
      {error && <Error error={error} />}
      {!error &&
        (isLoaded ? (
          <div className="box justify-center mx-auto m-4 w-2/3 bg-blue-100 shadow-lg rounded-lg overflow-hidden">
            <PersonCard
              key={`${name} ${surname}`}
              photo={photo}
              name={name}
              surname={surname}
              region={region}
              email={email}
              phone={phone}
              handleClick={handleClick}
            />
          </div>
        ) : (
          <div className="loading mx-auto"></div>
        ))}
    </div>
  );
};

export default People;
