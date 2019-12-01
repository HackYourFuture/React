import React, { useState, useEffect } from 'react';

function Button(props) {
  return (
    <div>
      <button className="button" onClick={props.clickHere}>
        {props.buttonText}
      </button>
    </div>
  );
}

export default Button;
