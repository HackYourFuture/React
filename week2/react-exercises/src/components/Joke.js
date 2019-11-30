import React from 'react';
import RandomJoke from './RandomJoke';

function Joke() {
  const data = RandomJoke();
  return (
    <div>
      {data.map(joke => (
        <li className="jokeLi" key={`${joke.id}`}>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </li>
      ))}
    </div>
  );
}

export default Joke;
