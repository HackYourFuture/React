import './productList.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        product && (
          <div className="product__details">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

          </div>
        )
      )}
    </div>
  );
}

export default ProductDetail;
