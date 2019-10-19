import React from 'react';

const Form = props => {
  return (
    <div>
      <form onSubmit={props.click}>
        <input type="text" name="description" placeholder="description" className="item" />
        <input type="date" name="deadline" className="item" />
        <input type="boolean" name="done" placeholder="done" className="item" />
        <button className="btn-add-item">Add New Item</button>
      </form>
    </div>
  );
};

export default Form;
