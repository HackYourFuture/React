import React from 'react'

const CategoryListItem = ({ category, onSelectCategory, activeCategory }) => {
    return (
        <li >
            <input
                className={`categories-item ${category === activeCategory ? "category-active" : ""
                    }`}
                type="button"
                value={category}
                onClick={(e) => {
                    onSelectCategory(e.target.value);
                }}
            />
        </li>
    )
}

export default CategoryListItem