import React from 'react';

function UserInfo({ user }) {
  const getNameStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };
  const { name, surname, gender, region, phone, birthday, email, password } = user;
  return (
    <React.Fragment>
      <p style={getNameStyle}>{` ${name} ${surname}`}</p>
      <div>
        <p> {`👤 ${gender}`}</p>
        <p> {`🌐 ${region}`}</p>
        <p>{`📞  ${phone}`}</p>
        <p>{`🎂 ${birthday.dmy}`}</p>
        <p>{`✉️ ${email}`}</p>
        <p>{`🔑  ${password}`}</p>
      </div>
    </React.Fragment>
  );
}

export default UserInfo;
