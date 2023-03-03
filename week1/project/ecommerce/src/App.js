import { useState } from 'react';
import './App.css';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';
import CategoriesList from './components/Categories';
import ProductsList from './components/Products';

function App() {
  const [state, setState] = useState({selectedCategory:'', isAll: true})
  return (
    <div className = "App">
      <h1>Products</h1>
      { CategoriesList({categories, state, setState}) }
      { ProductsList({products, state}) }
    </div>
  );
}

export default App;