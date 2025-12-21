import { useEffect, useState } from "react";
import Person from "./Person";

export default function PersonController() {
  const [person, setPerson] = useState(null);

  async function getPerson() {
    const response = await fetch("https://randomuser.me/api?results=1");
    const data = await response.json();

    const apiPerson = data.results[0];

    setPerson({
      first_name: apiPerson.name.first,
      last_name: apiPerson.name.last,
      email: apiPerson.email,
    });
  }

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}
