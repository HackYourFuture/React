import React from "react";

const Form = ({ submitForm }) => {
  return (
    <form style={{ marginBottom: "20px" }} onSubmit={submitForm}>
      <input type="text" name="description" placeholder="add a new task" />
      <input type="text" name="deadline" placeholder="add a deadline" />
      <input style={{ fontSize: "12px" }} type="submit" name="submit" />
    </form>
  );
};

export default Form;
