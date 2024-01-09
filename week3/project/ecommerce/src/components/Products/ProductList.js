import { useFetch } from "../../hooks/useFetch";
import Product from "./Product";

const ProductList = ({ category }) => {
  const {
    data: products,
    loading,
    error,
  } = useFetch({ url: "https://fakestoreapi.com/products", category });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
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
