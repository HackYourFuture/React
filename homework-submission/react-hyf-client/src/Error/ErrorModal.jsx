import React from 'react';
import './ErrorModal.css';
const ErrorModal = props => {
  const { onClose, errorMessage } = props;
  return (
    <React.Fragment>
      <div className="backdrop" onClick={onClose} />
      <div className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>{errorMessage}</p>
        <div className="error-modal__actions">
          <button className="Okay" type="button" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
