import React from 'react';

//Animation
import Fade from 'react-reveal/Fade';

export default class EditForm extends React.Component {

  render() {
    const { handelCancel,
      handleChange,
      value,
      handelSubmit,
    } = this.props
    return (
      <div >
        <Fade cascade >
          <input type="text"
            value={value}
            onChange={handleChange}
          />
          <button className="saveBtn" onClick={handelSubmit}>save</button>
          <button className="cancelBtn" onClick={handelCancel}>cancel</button>
        </Fade>
      </div>

    );
  }
}
