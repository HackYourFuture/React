import React from 'react';

const Joke = ({ obj }) => {
  const { joke } = obj;
  const { setup, punchline } = joke;

  return (
    <div>
      <h1>my joke</h1>
      <p> {setup}</p>
      <p>{punchline}</p>
    </div>
  );
};
export default Joke;
