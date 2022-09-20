import React from 'react';
import { allCategories } from '../fake-data/all-categories';

const Buttons = (catPro) => {
  const listItems = allCategories.map((category, index) => {
    return (
      <li className="product-button" key={category}>
        <button className="button" onClick={() => catPro(category)} key={index}>
          {category}
        </button>
      </li>
    );
  });
  return listItems;
}

export default Buttons;
