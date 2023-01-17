import React from 'react';
import './product.css';
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='product'>
        <img src={product.image} alt={product.image}></img>
        <p>{product.title} </p>
      </div >
    </Link>
  )
}

export default Product;
