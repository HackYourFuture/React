import React, { useState, useEffect } from 'react';
import Person from './Person';

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://uinames.com/api/?amount=10&&ext=photos',
      );
      const data = await response.json();
      setPeople(data);
      setLoading(false);
    };
    fetchPeople();
  }, []);

  return loading ? (
    <div className="loading mx-auto"></div>
  ) : (
    <div className="box m-4 w-2/3 shadow-lg rounded-lg overflow-hidden">
      {people.map(({ photo, name, surname, region, email, phone }) => (
        <Person
          key={`${name} ${surname}`}
          photo={photo}
          name={name}
          surname={surname}
          region={region}
          email={email}
          phone={phone}
        />
      ))}
    </div>
  );
};

export default People;
