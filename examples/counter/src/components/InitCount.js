import React from "react";

const InitCount = ({ setNumber }) => {
  return (
    <form onSubmit={setNumber}>
      <input type="number" name="number" />
      <button>Initialize counter!</button>
    </form>
  );
};

export default InitCount;
