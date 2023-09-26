import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  const fetchProductDetails = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div className="product-detail">
      {loading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <p>Reviews: {product.rating.count}</p>
          </div>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}

export default ProductDetail;
