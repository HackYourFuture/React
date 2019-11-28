import React, { useState, useEffect } from "react";
import Error from "../Error";
import Joke from "../Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [status, setStatus] = useState("Loading");
  const [errorMessage, setErrorMessage] = useState("");

  async function getJoke() {
    try {
      const res = await fetch(
        `https://official-joke-api.appspot.com/random_joke`
      );
      if (!res.ok) {
        throw Error("An error occurred while fetching data");
      }
      const randomJoke = await res.json();
      setJoke(randomJoke);
      setStatus("Success");
    } catch (error) {
      if (error) {
        setStatus("Error");
        setErrorMessage(error.message);
      }
    }
  }

  useEffect(() => {
    setInterval(async () => getJoke(), 7000);

    return () => {
      console.log("And its over");
      return getJoke();
    };
  }, []);
  return (
    <div>
      {status === "Loading" && (
        <p style={{ minHeight: "350px" }}>Your joke is coming!</p>
      )}
      {status === "Success" && <Joke joke={joke} />}
      {status === "Error" && <Error text={errorMessage} />}
    </div>
  );
};

export default RandomJoke;
