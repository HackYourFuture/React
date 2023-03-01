// import logo from './logo.svg';

import './App.css';
import CategoryList from "./components/categories"
import products from "./fake-data/all-products"
import Products from './components/products';
function App() {
  return (
    <div className="App">
      <h1>
        Products
      </h1>
      {CategoryList ()}
      {Products(products)
      }
    </div>
  );
}

export default App;
