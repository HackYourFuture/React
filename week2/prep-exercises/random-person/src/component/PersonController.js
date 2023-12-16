import { useState, useEffect } from "react";
import Person from "./Person";
function PersonController() {
  const [person, setPerson] = useState(null);
  //console.log(person);
  function getPerson() {
    fetch("https://www.randomuser.me/api?results=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setPerson(data.results[0]);
      });
  }

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="personBox">
      <Person person={person} />
    </div>
  );
}

export default PersonController;
