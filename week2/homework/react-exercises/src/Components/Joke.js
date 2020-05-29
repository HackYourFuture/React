import React from 'react';

export default function Joke({ joke: { setup, punchline } }) {
  return (
    <div>
      <p>{setup}</p>
      <p> {punchline} </p>
    </div>
  );
}