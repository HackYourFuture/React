import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      const fetchProduct = async () => {
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

      fetchProduct();
    },
    [id],
  );

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
