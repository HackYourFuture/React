import { useState, useEffect } from "react";
import Product from "./Product";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchProducts(url) {
    fetch(url)
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Can not fetch products!");
      });
  }

  useEffect(() => {
    if (category) {
      fetchProducts(`https://fakestoreapi.com/products/category/${category}`);
      return;
    }
    fetchProducts("https://fakestoreapi.com/products");
  }, [category]);

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
