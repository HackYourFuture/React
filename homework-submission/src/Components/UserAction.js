import React from "react";

function Edit(props) {
  const { itemID, handleEdit } = props;
  return (
    <button className="btn" onClick={() => handleEdit(itemID)}>
      Edit
    </button>
  );
}

function Update(props) {
  const { itemID, handleUpdate } = props;
  return (
    <button className="btn" onClick={() => handleUpdate(itemID)}>
      Update
    </button>
  );
}

function Remove(props) {
  const { itemID, handleRemove } = props;
  return (
    <button className="btn" onClick={() => handleRemove(itemID)}>
      Remove
    </button>
  );
}

function Cancel(props) {
  const { handleCancel } = props;
  return (
    <button className="btn" onClick={handleCancel}>
      Cancel
    </button>
  );
}

export { Edit, Update, Remove, Cancel };
