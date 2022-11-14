import React from "react";
import categories from "../fake-data/all-categories";

function Categories({ changeCategory }) {
  return (
    <div className="categoryList">
      {categories.map((category) => (
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
