import React from 'react';

const Info = ({ gender, region, phone }) => {
  return (
    <div className="Info">
      <div className="Info-gender">
        <i className="huge venus mars icon"></i>
        <h2 className="gender">{gender}</h2>
      </div>
      <div className="Info-region">
        <i className="huge map marker alternate icon"></i>
        <h2 className="region">{region}</h2>
      </div>
      <div className="Info-phone">
        <i class="huge phone icon"></i>
        <h2 className="phone">{phone}</h2>
      </div>
      {/* <div className="Info-region">
        <i className="huge map marker alternate icon"></i>
        <h2 className="birthday">{birthday.dmy}</h2>
      </div> */}
    </div>
  );
};

export default Info;
