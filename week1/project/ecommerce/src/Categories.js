import React from 'react';
import categoriesArr from './fake-data/all-categories.js';
import './styles/categories.css';

function Categories({ selectedCategory, onCategoryClick }) {
    return (
        <div className='catContainer' >

            {categoriesArr.map(
                (category, index) => //onclick, selectedCategory
                    <div key={index} className={`category ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => onCategoryClick(category)} >
                        {category}</div>)
            }
        </div >
    );
}

export default Categories;
