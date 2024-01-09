import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";
import FavContext from "../../context/fav-context";

const Product = (props) => {
  const { id, image, title, price } = props;
  const [isFav, setIsFav] = useState(false);

  const { toggleFavProduct, items } = useContext(FavContext);

  const navigate = useNavigate();

  const imgSrc = isFav ? heartSolid : heartRegular;

  useEffect(() => {
    const isFavProduct = items.includes(id);
    //console.log(isFavProduct);
    if (isFavProduct) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [id, items]);

  return (
    <div className="product-item">
      <img src={image} alt={title} />
      <h3>{title.substring(0, 50)}</h3>

      <p>Price: ${price}</p>
      <button onClick={() => navigate(`/product/${id}`)}>More..</button>
      <div className="heartButton" onClick={toggleFavProduct.bind(null, id)}>
        <img src={imgSrc} alt="heartIcon" />
      </div>
    </div>
  );
};

export default Product;
