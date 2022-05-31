import React from 'react'
import categories from '../fake-data/all-categories.js'
import CategoryListItem from './CategoryListItem'

const CategoryList = ({ onSelectCategory, activeCategory }) => {
    return (
        <ul className='categories'>
            {categories.map((category, index) => (
                <CategoryListItem
                    key={index}
                    category={category}
                    onSelectCategory={onSelectCategory}
                    activeCategory={activeCategory}
                />
            ))}
        </ul>
    )
}

export default CategoryList