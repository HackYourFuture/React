import React from 'react';
import { useEffect, useState } from "react";
import Person from './Person';
import Button from './Button';


const PersonController = () => {
  const [person, setPerson] = useState(null);
  const getPerson = async () => {
    const response = await fetch(`https://www.randomuser.me/api?results=1`);
    const data = await response.json();
    setPerson({
      first_name: data.results[0].name.first,
      last_name: data.results[0].name.last,
      email: data.results[0].email,
      phone: data.results[0].phone
    });
    console.log(data);
  };

  useEffect(() => {
    getPerson()
  }, []);
  return (
    <div>
      <Person person={person} />
      <Button title="Get Person" getPerson={getPerson} />

    </div>
  )
}

export default PersonController
