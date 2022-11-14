import React from "react";
import categoriesData from "../fake-data/all-categories";

function Categories({ changeCategory }) {
  return (
    <div className="categoryList">
      {categoriesData.map((category) => (
        <div key={category}>
          <button onClick={() => changeCategory(category.slice(6))}>
            {category}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categories;
