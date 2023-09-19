import React, { useState } from "react";
import category from "../fake-data/all-categories";

function CategoryList({ onCategoryClick }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat); // Update the active category when a button is clicked
    onCategoryClick(cat); // Pass the selected category to the parent component
  };

  return (
    <div className="category-list">
      <div className="category-buttons">
        {category.map((cat, index) => (
          <button
            key={index}
            className={`category-button ${
              cat === activeCategory ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="category-name">
        <h2>Active: {activeCategory || "None"}</h2>
      </div>
    </div>
  );
}

export default CategoryList;
