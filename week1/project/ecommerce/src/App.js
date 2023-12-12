import { useState } from "react";
import ProductList from "./components/Products/ProductList";
import CategoryList from "../src/components/CategoryList";
import "../src/App.css";
import productsData from "./all-products";

const transformProducts = productsData.map((product) => {
  return { ...product, category: `FAKE: ${product.category}` };
});
//console.log(transformProducts);

const App = () => {
  const [category, setCategory] = useState("");

  const filterProducts = transformProducts.filter((product) => {
    return product.category === category || category === "";
  });
  return (
    <div>
      <h1>E-commerce App</h1>
      <main>
        <CategoryList onFilterProducts={setCategory} />
        <ProductList products={filterProducts} />
      </main>
    </div>
  );
};

export default App;
