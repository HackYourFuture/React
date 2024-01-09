import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/${id}`);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  //console.log(product);
  return (
    <div className="productDetails">
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
