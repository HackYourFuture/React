import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (res.status !== 200) {
        throw new Error("Something Went Wrong!");
      }
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(function () {
    fetchProduct();
  }, []);

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
        <img src={product.image} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
