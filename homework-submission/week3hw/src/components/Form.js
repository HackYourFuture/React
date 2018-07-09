import React from "react";

const Form = ({ submitForm }) => {
  return (
    <form style={{ marginBottom: "20px" }} onSubmit={submitForm}>
      <input
        type="text"
        name="description"
        placeholder="write the description"
      />
      <input type="text" name="deadline" placeholder="write the deadline" />
      <input style={{ fontSize: "12px" }} type="submit" name="submit" />
    </form>
  );
};

export default Form;
