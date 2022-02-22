import React, { useState, useEffect, useContext } from "react";
import Error from "./Error";
import Categories from "./Categories";
import ProductList from "./ProductList";

function ProductController() {
  const BASE_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [navbarLoading, setNavbarLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        //get category names for navbar
        const categories = await fetch(`${BASE_URL}/categories`);
        const categoriesData = await categories.json();
        setCategories(categoriesData);
        setNavbarLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getCategories();
    handleList();
  }, []);

  //fetches data for each navbar item
  const handleList = async (category) => {
    try {
      let products = [];
      if (category) {
        products = await fetch(`${BASE_URL}/category/${category}`);
      } else {
        products = await fetch(`${BASE_URL}`);
      }
      const productsData = await products.json();
      setProducts(productsData);
      setProductsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // add favorites to

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="ProductController">
      <Categories
        handleList={handleList}
        categories={categories}
        isLoading={navbarLoading}
      />
      <ProductList products={products} isLoading={productsLoading} />
    </div>
  );
}

export default ProductController;
