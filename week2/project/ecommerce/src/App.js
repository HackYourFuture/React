import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

async function fetchCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchCategories();
      const products = await fetchProducts();
      setCategoriesData(categories);
      setProductsData(products);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        categoriesData={categoriesData}
        setSelectedCategory={setSelectedCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Products
              productsData={productsData}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
