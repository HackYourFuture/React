import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { detail } = useFetch(id);

  return (
    <div>
      {detail && (
        <div className="productCard">
          <div className="detailImage">
            <img src={detail.image}></img>
          </div>
          <div className="detailDescription">
            <h2>{detail.title}</h2>
            <div className="rate_price">
              <span>&euro; {detail.price}</span>
              <span>
                Rate: {detail.rating.rate} / Count: {detail.rating.count}
              </span>
            </div>
            <p>{detail.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
