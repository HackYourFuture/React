import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { allCategories } from './fake-data/all-categories';

function App() {
  const [category, setCategory] = useState(allCategories);
  return (
    <header className="App">
      <Header />
      <ul className="product-list">{Buttons(setCategory)}</ul>
      <main>{ProductsList(category)}</main>
    </header>
  );
}

export default App;
