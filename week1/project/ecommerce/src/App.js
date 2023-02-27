import Products from "./components/products.js";
import Categories from "./components/categories.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  const Header = () => {
    return (
      <header>
        {" "}
        <button
          className="home button"
          onClick={() => {
            setCategory("");
          }}
        >
          Home
        </button>
        <p className="current-category">
          Current Category: <strong>{category}</strong>
        </p>
      </header>
    );
  };

  return (
    <div className="app">
      <Header />
      <ul className="categories-list">
        <Categories setCategory={setCategory} />
      </ul>

      <div className="products-box">
        <Products category={category} />
      </div>
    </div>
  );
}

export default App;
