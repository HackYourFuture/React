import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const productURL = `https://fakestoreapi.com/products/${id}`


  const getDetail = async () => {
    try {
      const response = await fetch(productURL);
      const data = await response.json();
      setProductDetail(data);
      console.log("all", data);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getDetail()
  }, []);
  return (
    <div className='productDetail'>
      <h1>{productDetail.title}</h1>
      <div className='detailContent'>
        <p>{productDetail.description}</p>
        <img src={productDetail.image} alt={productDetail.image}></img>
      </div>

    </div >
  )
}

export default ProductDetail;
