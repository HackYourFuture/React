import { useState } from 'react';
import './App.css';
import CategoryOfButton from './components/Buttons';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { allCategories } from './fake-data/all-categories';
import allProducts from './fake-data/all-products';

function App() {
  const [products, setProducts] = useState(allProducts);
  return (
    <header className="App">
      <Header />
      <nav>
        <ul className="product-list">
          {allCategories.map((categoryObj, index) => (
            <CategoryOfButton
              category={categoryObj}
              setProducts={setProducts}
              key={index}
            />
          ))}
        </ul>
      </nav>
      <main className="main">
        <ul className="products">
          <ProductsList products={products} />
        </ul>
      </main>
    </header>
  );
}

export default App;
