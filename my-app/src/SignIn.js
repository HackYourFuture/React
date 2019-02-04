import React from 'react';

function SingingIn(props) {
  return (
    <div className="sign-in-page">
      <img
        src="https://i.pinimg.com/originals/34/7d/89/347d89cf1fed09ebb25f3476b5b54fe3.jpg"
        alt="homepage-ph"
      />
      <form onSubmit={props.handleSubmitSingingIn}>
        <input type="text" name="author" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default SingingIn;
