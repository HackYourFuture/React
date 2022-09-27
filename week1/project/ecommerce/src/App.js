import { useState } from 'react';
import ButtonCategory from './components/ButtonCategory';
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
          {allCategories.map((categoryObj, id) => (
            <ButtonCategory
              category={categoryObj}
              setProducts={setProducts}
              key={id}
            />
          ))}
        </ul>
      </nav>
      <main className="main">
        <ProductsList products={products} />
      </main>
    </header>
  );
}

export default App;
