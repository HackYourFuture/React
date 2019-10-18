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
        <p>{`📞  ${userValues[6]}`}</p>
        <p>{`🎂 ${userValues[7].dmy}`}</p>
        <p>{`✉️ ${userValues[8]}`}</p>
        <p>{`🔑  ${userValues[9]}`}</p>
      </div>
    </React.Fragment>
  );
}

export default UserInfo;
