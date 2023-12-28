import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { id, image, title, price } = props;

  const navigate = useNavigate();

  return (
    <div className="product-item">
      <img src={image} />
      <h3>{title.substring(0, 50)}</h3>

      <p>Price: ${price}</p>
      <button onClick={() => navigate(`/product/${id}`)}>More..</button>
    </div>
  );
};

export default Product;
