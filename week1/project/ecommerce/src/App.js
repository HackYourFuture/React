import { useState } from 'react';
import './App.css';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';
import Categories from './components/Categories';
import ProductsList from './components/Products';

function App() {
  const [state, setState] = useState({selectCategory:'', isAll: true})
  return (
    <div className = "App">
      <h1>Products</h1>
      <Categories categories={categories} state={state} setState={setState} />
      <ProductsList products={products} state={state} />
    </div>
  );
}

export default App;