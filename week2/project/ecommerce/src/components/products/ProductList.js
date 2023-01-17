
import React, { useEffect, useState } from 'react';
import Categories from '../category/Categories';
import Product from './Product';
import './productList.css'

const ProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filtered, setFiltered] = useState(allProduct);
  const [selectedBtn, setSelectedBtn] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  x
  const handleClick = (e) => {
    setSelectedBtn(e.target.innerText);
    console.log("selected", selectedBtn);
  }
  const getProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setAllProduct(data);
      console.log("all", data);
      setTimeout(() => {
        setAllProduct(data);
        setFiltered(data);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    getProducts()
  }, []);

  useEffect(() => {
    if (selectedBtn) {
      setFiltered(allProduct.filter(product => product.category === selectedBtn))
    }
  }, [selectedBtn]
  )

  console.log('filtered', filtered)

  return (
    <div className='homePage'>
      <h1>Products</h1>
      {!isLoading && <Categories handleClick={handleClick} />}
      <div className='productList'>
        {isLoading ? "Loading..." : filtered.map((product, index) => {
          return <Product product={product} key={index} filtered={filtered} />
        })}
      </div>
    </div>
  )
}

export default ProductList;
