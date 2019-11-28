import React from "react";
import "./Joke.css";

const Joke = ({ joke }) => {
  return (
    <div className="joke-div">
      <p className="joke-setup">{joke.setup}</p>
      <p className="joke-punchline">{joke.punchline}</p>
    </div>
  );
};

export default Joke;
