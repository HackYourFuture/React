import React from 'react';
import RandomJoke from './RandomJoke';

function Joke() {
  const [data, loading] = RandomJoke('https://official-joke-api.appspot.com/random_joke');
  return (
    <div className="joke-main">
      <h1 className="joke-title">!Bad Joke</h1>
      {loading ? (
        'loading...'
      ) : (
        <ul className="joke-list">
          {data.map(({ setup, punchline, id }) => (
            <li key={`joke-${id}`}>
              <p className="setup">{setup}</p>
              <p className="punchline">{punchline}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Joke;
