import React from "react";

const Add = ({ addHandler }) => {
  return (
    <form onSubmit={addHandler} className="add-form">
      <input
        type="text"
        name="description"
        placeholder="Description..."
        id="add-description"
        className="add-input"
      />
      <input
        type="date"
        name="deadline"
        placeholder="Deadline"
        className="add-input"
      />
      <input
        type="submit"
        name="add"
        value="Add"
        id="add-button"
        className="add-input"
      />
    </form>
  );
};

export default Add;
