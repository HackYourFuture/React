import React from 'react';
// import chat from "./chat.png"
// import coin from "./coin.png"
// import delivery from "./f-delivery.png"
import services from './serviceInfo';

const Guarantee = () => {
  return (
    <div className='service-section'>
      {services.map((service, index) => {
        return (
          <div className="service" key={index}>
            <img src={service.image} alt="icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Guarantee;
