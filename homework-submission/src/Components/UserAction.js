import React from "react";

function Edit(props) {
  const { todo, handleEdit, actions } = props;
  return (
    <button className="btn" onClick={e => handleEdit(e, todo)}>
      {actions.editClicked ? "Cancel" : "Edit"}
    </button>
  );
}

function Update(props) {
  const { todoIndex: i, handleUpdate } = props;
  return (
    <button className="btn" onClick={() => handleUpdate(i)}>
      Update
    </button>
  );
}

function Remove(props) {
  const { todoIndex: i, handleRemove } = props;
  return (
    <button className="btn" onClick={() => handleRemove(i)}>
      Remove
    </button>
  );
}

export { Edit, Update, Remove };
