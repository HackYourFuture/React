import { Link } from 'react-router-dom';

export default function Product({ product, setActiveProductInfo }) {
  const handleClick = () => {
    setActiveProductInfo(product);
  }

  return(
    <li className='product-card'>
      <Link to={`/product/${product?.id}`} onClick={handleClick}>
      <img
        src={product?.image}
        alt={product?.description}      
      />
     <p className='product-title'>{product?.title}</p>
     </Link>
    </li>
  );
};