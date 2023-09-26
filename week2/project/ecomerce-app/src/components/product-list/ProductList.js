
import './productList.css';

function ProductList({ products }) {
  return (
    <div className="product__list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <p>Reviews: {product.rating.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
