/**
 * This component creates an <li> element that displays the data of the user given.
 * The `user` prop is an object with the following properties `firstName`, `lastName` and `role`.
 */

function UserListItem({ user }) {
  const { firstName, lastName, role } = user;

  return <li>{`${firstName} ${lastName} (${role})`}</li>;
}

export default UserListItem;
