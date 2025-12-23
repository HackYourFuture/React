import React from 'react'
import CategoryItem from './CategoryItem'

function CategoryList({ categories, selectedCategory, onSelectCategory }) {
    return (
        <nav className="category-list">
            {/* "All" button is special, so we handle it manually or as a pseudo-category */}
            <CategoryItem
                category="All"
                isActive={selectedCategory === null}
                onSelect={() => onSelectCategory(null)}
            />

            {categories.map((cat, index) => (
                <CategoryItem
                    key={index}
                    category={cat}
                    isActive={selectedCategory === cat}
                    onSelect={() => onSelectCategory(cat)}
                />
            ))}
        </nav>
    )
}

export default CategoryList
