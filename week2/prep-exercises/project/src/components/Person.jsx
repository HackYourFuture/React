export default function Person({ person }) {
  if (!person) return null;

  return (
    <ul>
      <li>First name: {person.first_name}</li>
      <li>Last name: {person.last_name}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
}
