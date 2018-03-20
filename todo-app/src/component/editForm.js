import React from 'react';

export default class EditForm extends React.Component {

  render() {
    const { handelCancel,
      handleChange,
      value,
      handelSubmit,
    } = this.props
    return (
      <div>
        <input type="text"
          value={value}
          onChange={handleChange}         
        />
        <button className="saveBtn" onClick={handelSubmit}>save</button>
        <button className="cancelBtn" onClick={handelCancel}>cancel</button>
      </div>

    );
  }
}
