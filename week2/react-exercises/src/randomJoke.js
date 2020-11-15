import React,{useState, useEffect} from 'react';


const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
   fetch('https://official-joke-api.appspot.com/random_joke')
    .then (Response => Response.json())
    .then (data => setJoke(data))
    .catch(error => setError(true))
    .finally(setLoading(false));
  }, []);

  return (
    <Joke joke={joke} error={error} loading={loading}/>
  )
}

  const Joke = ({joke, error, loading}) => {
   return(
    <div>
      {loading && <p>is loading...</p>}
      {error && <p>There is an Error</p>}
      {!error && <><p>{joke.setup}</p> <p>{joke.punchline}</p></>}
    </div>
  )
 }


export default RandomJoke;
