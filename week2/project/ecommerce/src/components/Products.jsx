import { Link } from "react-router-dom";

const Products = ({ productsData, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  return (
    <div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div>
                <img src={product.image} alt="product" />
                <p>{product.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
