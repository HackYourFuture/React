import React from 'react';
import css from './Category.module.css';

const Category = ({ arr, onClick }) => {
  return (
    <div className={css.container}>
      {arr.map((category) => {
        return (
          <>
            <button
              className={css.button}
              key={category.index}
              onClick={() => onClick(category)}
            >
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Category;
