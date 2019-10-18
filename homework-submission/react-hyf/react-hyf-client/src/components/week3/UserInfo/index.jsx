import React from 'react';

function UserInfo({ userValues }) {
  const getNameStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };
  return (
    <React.Fragment>
      <p style={getNameStyle}>{` ${userValues[0]} ${userValues[1]}`}</p>
      <div>
        <p> {`👤 ${userValues[2]}`}</p>
        <p> {`🌐 ${userValues[3]}`}</p>
      </div>
    </React.Fragment>
  );
}

export default UserInfo;
