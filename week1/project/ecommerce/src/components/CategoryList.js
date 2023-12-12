import React from "react";
import categoriesData from "../all-categories";

const CategoryList = (props) => {
  return (
    <div id="category-list">
      <ul>
        {categoriesData.map((category, index) => (
          <li key={index} onClick={() => props.onFilterProducts(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
