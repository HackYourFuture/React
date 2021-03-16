import React from 'react';
import guaranteeList from './GuaranteeList';
const shuffle = require('lodash.shuffle');

function GuaranteeDetails(props) {
  const {img, title, description} = props;
  return (
    <div className="guarantee_item_container">
      <img src={img} className="guarantee_img" alt={{title}} />
      <h2 className="guarantee_title">{title}</h2>
      <p className="guarantee_desc">{description}</p>
    </div>
  );
}
function Guarantee() {
  const shuffleGuaranteeItems = shuffle(guaranteeList);

  return (
    <div className="guarantee_container">
      {shuffleGuaranteeItems.map((item) => (
        <GuaranteeDetails
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Guarantee;
