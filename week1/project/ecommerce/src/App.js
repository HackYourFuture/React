import React, { useState } from 'react';
//import './App.css';
import AllCategories from './Categories';
import AllProducts from './Products';


function App() {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {

        setSelectedCategory(category);
    };

    return (
        <div className="App">
            <h1>Products</h1>
            <AllCategories
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick} />

            <AllProducts selectedCategory={selectedCategory} />

        </div>
    );
}

export default App;
