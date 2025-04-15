import React, { useState } from 'react';
import Category from './Category.jsx';
import allCategories from '../src/fake-data/all-categories.js';
import products from '../src/fake-data/all-products.js';
import css from './Categories.module.css';

const Categories = () => {
  const [filtered, setFiltered] = useState(products);

  const handlerProduct = (category) => {
    const cleanCategory = category.replace(/^FAKE:\s*/, '');
    const filteredArr = products.filter((product) => {
      return product.category === cleanCategory;
    });
    setFiltered(filteredArr);
  };

  return (
    <>
      <Category arr={allCategories} onClick={handlerProduct} />
      <ul className={css.gridContainer}>
        {filtered.map((product) => (
          <li className={css.item} key={product.id}>
            <img className={css.img} src={product.image} alt={product.title} />
            <p className={css.title}>{product.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
