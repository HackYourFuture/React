import Product from "./Product";
import Spinner from "./Loader/Loader";
import { Link } from "react-router-dom";

const ProductList = ({ products, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="productList">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
