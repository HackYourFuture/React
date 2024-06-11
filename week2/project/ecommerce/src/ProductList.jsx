import Product from './Product';
import { useEffect, useState } from 'react';
const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export default function ProductList({ activeCategory, setActiveProductInfo }) {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(PRODUCTS_URL);
      const result = await response.json();
      setProductList(result);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally{
      setIsLoading(false);
    }
  }

  const getFilteredProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${PRODUCTS_URL}/category/${activeCategory}`);
      const result = await response.json();
      setFilteredProducts(result);
    } catch (error) {
      console.error('Error fetching filtered product data:', error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    if(activeCategory === ''){ 
      getProducts();
    } else {
      getFilteredProducts(); 
    }
  }, [activeCategory]); 

  const getProductCard = (products) => {
    return products?.map((product) => <Product product={product} key={product.id} setActiveProductInfo={setActiveProductInfo}/>);
  }

  const data = activeCategory === '' ? getProductCard(productList) : getProductCard(filteredProducts);

  return (
    loading ? <p>{'Loading...'}</p> : <ul className='product-list'>{data}</ul>
  );
}
