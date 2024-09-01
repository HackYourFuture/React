import React from "react";

const Categories = ({ categories, selectedCategory, handleCategoryClick }) => {
    return (
        <div className="categories">
        {categories.map((category) => (
            <div key={category} 
            className = {`category ${category === selectedCategory ? 'category-selected' : ''}`}>
            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
            </div>
        ))}
        </div>
    );
    }

export default Categories;