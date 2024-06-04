import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import products from './extract-categories';
import categories from  './fake-data/all-categories';

const App = () => {
  const allCategories = ['ALL', ...categories];

  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProducts = activeCategory === 'ALL'
    ? products
    : products.filter(product => product.category === activeCategory.replace('FAKE: ', ''));

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory('ALL');
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList
        categories={allCategories}
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryClick}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;



// import { useState } from 'react';
// import './App.css';
// import ProductList from './ProductList';
// import CategoryList from './CategoryList';
// import products from './extract-categories';
// import categories from  './fake-data/all-categories';



// function App() {
//   const [activeCategory, setActiveCategory] = useState('FAKE: all');

//   const filteredProducts = activeCategory === 'FAKE: all'
//     ? products
//     : products.filter(product => `FAKE: ${product.category}` === activeCategory);

//   return (
//     <div className="App">
//       <h1>Products</h1>
//       <CategoryList
//         categories={categories}
//         activeCategory={activeCategory}
//         setActiveCategory={setActiveCategory}
//       />
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// }

// export default App;
