import React from "react";

const Forms = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="description" placeholder="Description..." />
      <input type="date" name="deadline" placeholder="Deadline" />
      <input type="submit" name="submit" value="submit" />
    </form>
  );
};

export default Forms;
