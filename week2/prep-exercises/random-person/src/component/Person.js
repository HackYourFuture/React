function Person(props) {
  const { person } = props;
  if (person == null) {
    return null;
  }

  return (
    <ul>
      <li>First name: {person.name.first}</li>
      <li>Last name: {person.name.last}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
}

export default Person;
