import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Home Page</h1>
      </header>
      <main className="App-main">
        <p className="home_p">
          This small application is to summarize what I have learned during the Reat module.
          <br />I upgraded my work, on the both sides : styling and React Script.
          <br />
          Everything looks better now. And there is also page 404, But I am wondering about : how to
          give the browser something like a fake server's response with Status Code 404.
          <br />I tried to change how I'm handling fetching new data after clicking on the button.
          But I couldn't make it better. So it stays the same.
        </p>
      </main>
    </div>
  );
};

export default Home;
