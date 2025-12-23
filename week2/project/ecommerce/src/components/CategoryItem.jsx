import React from 'react'

function CategoryItem({ category, isActive, onSelect }) {
    // Display logic: remove "FAKE: " prefix if present for cleaner UI
    const displayName = category.replace("FAKE: ", "")

    return (
        <button
            className={`category-btn ${isActive ? 'active' : ''}`}
            onClick={onSelect}
        >
            {displayName}
        </button>
    )
}

export default CategoryItem
